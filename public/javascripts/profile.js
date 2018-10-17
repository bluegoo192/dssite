var app = new Vue({
  el: '#app',
  data: {
    transparentNav: false,
    show: {
      mobilenav: false
    },
    loading: false,
  },
  methods: {
    submitPayment: function (event) {
      requestCardNonce(event); // comes from squarepaymentform.js
      this.loading = true;
    },
    genQrCode: function () {
      generateQrCode();
    },
  }
})
