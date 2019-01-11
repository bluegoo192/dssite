var app = new Vue({
  el: '#app',
  data: {
    transparentNav: false,
    show: {
      mobilenav: false
    },
    loading: false,
    paymentErrors: null,
  },
  methods: {
    submitPayment: function (event) {
      requestCardNonce(event, (errors) => {
        this.paymentErrors = errors;
        this.loading = false;
      }); // comes from squarepaymentform.js
      this.loading = true;
    },
    genQrCode: function () {
      generateQrCode();
    },
  }
})
