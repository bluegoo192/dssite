var app = new Vue({
  el: '#app',
  data: {
    transparentNav: false,
    show: {
      mobilenav: false
    },
    currentDirectoryName: null,
    paidMembers: [],
    unpaidMembers: [],
    showScanner: false,
    showEmailsModal: false,
    loading: false,
    scanError: null,
    scanContent: null,
    currentCamera: 0,
    scanner: null,
    apiError: null,
    faqs: null,
    notification: '',
  },
  computed: {
    currentDirectory: function () {
      return (this.currentDirectoryName == null)
        ? null
        : this[this.currentDirectoryName];
    },
    emails: function () {
      if (this.currentDirectory == null) {
        return "Sorry, something went wrong.  Please refresh and try again";
      }
      let emails = '';
      this.currentDirectory.forEach(m => emails = emails + m.email + '\n');
      return emails;
    }
  },
  methods: {
    selectDirectory: function (dir) {
      this.currentDirectoryName = dir;
      if (!this.currentDirectory || this.currentDirectory.length === 0) {
        this.downloadDirectory(dir);
      }
    },
    downloadDirectory: async function (dirname) {
      this.loading = true;
      try {
        this[dirname] = (await this.$http.get('/api/v1/' + dirname)).body;
        this.loading = false;
      } catch (error) {
        this.apiError = error;
        this.loading = false;
      }
    },
    initScanner: function () {
      this.showScanner = true;
      let scanner = new Instascan.Scanner({
        video: document.getElementById('scanner'),
        mirror: false
      });
      this.scanner = scanner;
      console.log('created scanner')
      scanner.addListener('scan', content => {
        if (this.scanContent !== null) return; //don't override current scan until it is cleared
        this.scanContent = content;
      });
      console.log('added listener')
      Instascan.Camera.getCameras().then(cameras => {
        if (cameras.length > 0) {
          scanner.start(cameras[this.currentCamera]);
        } else {
          console.log('no cameras')
          this.scanError = "No camera found";
        }
      }).catch(e => {
        console.log('unexpected error')
        this.scanError = e;
      });
    },
    switchCameras: function () {
      if (this.scanner == null) return;
      let scanner = this.scanner;
      this.currentCamera = this.currentCamera + 1;
      Instascan.Camera.getCameras().then(cameras => {
        if (cameras.length > 0) {
          scanner.start(cameras[this.currentCamera % cameras.length]);
        } else {
          console.log('no cameras')
          this.scanError = "No camera found";
        }
      }).catch(e => {
        console.log('unexpected error')
        this.scanError = e;
      });
    },
    markAsPaid: function () {
      const content = JSON.parse(this.scanContent);
      this.$http.post('/api/v1/markMemberAsPaid', {
        memberId: content.id
      });
      this.scanContent = null;
    },
    markAsAttending: function () {
      const content = JSON.parse(this.scanContent);
      this.$http.post('/api/v1/markMemberAsAttending', {
        memberId: content.id
      });
      this.scanContent = null;
    },
    getFaqs: async function () {
      this.loading = true;
      this.faqs = JSON.stringify((await this.$http.get('/api/v1/faqs')).body);
      this.loading = false;
    },
    submitFaqs: async function () {
      this.loading = true;
      try {
        await this.$http.post('/api/v1/setFaqs', {
          faqs: JSON.parse(this.faqs)
        });
        this.loading = false;
        this.faqs = null;
      } catch (error) {
        this.apiError = error;
      }
    },
    broadcastNotification: async function () {
      if (this.notification==""){
        return;
      }
      this.loading = true;
      try {
        await this.$http.post('/api/v1/broadcastNotification', {
          text: this.notification
        });
        this.loading = false;
        this.notification = "";
      } catch (error) {
        this.apiError = error;
      }
    }
  }
})
