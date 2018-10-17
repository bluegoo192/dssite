var app = new Vue({
  el: '#app',
  data: {
    transparentNav: false,
    show: {
      mobilenav: false
    },
    members: [],
    showScanner: false,
    loading: false,
    scanError: null,
    scanContent: null,
    currentCamera: 0,
    scanner: null,
  },
  methods: {
    downloadMembers: function () {
      this.loading = true;
      this.$http.post('/api/v1/members').then(response => {
        this.members = response.body;
        this.loading = false;
      })
    },
    initScanner: function () {
      this.showScanner = true;
      let scanner = new Instascan.Scanner({ video: document.getElementById('scanner') });
      this.scanner = scanner;
      console.log('created scanner')
      scanner.addListener('scan', function (content) {
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
  }
})
