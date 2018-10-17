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
      let scanner = new Instascan.Scanner({ video: document.getElementById('scanner') });
      console.log('created scanner')
      scanner.addListener('scan', function (content) {
        this.scanContent = content;
      });
      console.log('added listener')
      Instascan.Camera.getCameras().then(cameras => {
        if (cameras.length > 0) {
          scanner.start(cameras[0]);
        } else {
          console.log('no cameras')
          this.scanError = "No camera found";
        }
      }).catch(e => {
        console.log('unexpected error')
        this.scanError = e;
      });
      this.showScanner = true;
    }
  }
})
