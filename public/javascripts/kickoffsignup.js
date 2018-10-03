const defaults = {
  email: null,
  password: null,
  firstName: null,
  lastName: null,
  yearStartedSchool: null,
  lastKnownMajor: null,
}

var app = new Vue({
  el: '#app',
  data: {
    transparentNav: false,
    show: {
      mobilenav: false,
      resetButton: true,
    },
    form: Object.assign({}, defaults),
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
      console.log(this.form.email);
      this.form = Object.assign({}, defaults);
    }
  },
  watch: {
    hasAccessCode: function (has) {
      localStorage.hasAccessCode = has;
    },
    accessCode: function (code) {
      localStorage.accessCode = code;
    }
  },
  computed: {
    validated: function () {
      let valid = true;
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      for (let key in defaults) {
        if (this.form[key] === null) {
          console.log(key, this.form[key] );
          valid = false;
        }
      }
      console.log(valid)
      return valid && re.test(this.form.email) && this.form.yearStartedSchool > 2000 && this.form.yearStartedSchool < 2020;
    }
  }
})