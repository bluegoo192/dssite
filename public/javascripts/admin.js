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
    loading: false,
    scanError: null,
    scanContent: null,
    currentCamera: 0,
    scanner: null,
    apiError: null,
  },
  computed: {
    currentDirectory: function () {
      return (this.currentDirectoryName == null)
        ? null
        : this[this.currentDirectoryName];
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
  }
})
