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
      status: "Register",
    },
    message: false,
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
      console.log('register');
      this.show.status = 'Loading...';
      this.$http.post('/api/v1/kickoffsignup', {
        Authorization: this.accessCode
      }).then(res => {
        this.form = Object.assign({}, defaults);
        this.message = "You have been signed up successfully!";
        setTimeout(() => {
          this.message = false;
        }, 2000);
        console.log(res);
      }).catch(error => {
        console.error(error);
        this.message = "Sorry, there was an error.  Please ask a staff member to assist you.";
        setTimeout(() => {
          this.message = false;
        }, 5000);
      });
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
      return true;
      let valid = true;
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      for (let key in defaults) {
        if (this.form[key] === null) {
          valid = false;
        }
      }
      return valid && re.test(this.form.email) && this.form.yearStartedSchool > 2000 && this.form.yearStartedSchool < 2020;
    }
  }
})