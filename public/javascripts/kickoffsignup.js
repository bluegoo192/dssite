var app = new Vue({
  el: '#app',
  data: {
    transparentNav: false,
    show: {
      mobilenav: false,
      resetButton: true,
    },
    accessCode: localStorage.accessCode,
    hasAccessCode: localStorage.hasAccessCode,
  },
  methods: {
    saveAccessCode: function () {
      this.hasAccessCode = true;
    },
    resetAccessCode: function () {
      this.accessCode = '';
      this.hasAccessCode = false;
    },
    register: function () {
      this.$http.post('/api/v1/kickoffsignup', {
        Authorization: this.accessCode
      }).then(console.log);
    }
  },
  watch: {
    hasAccessCode: function (has) {
      localStorage.hasAccessCode = has;
    },
    accessCode: function (code) {
      localStorage.accessCode = code;
    }
  }
})