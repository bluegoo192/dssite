Vue.component('nav-hamburger', {
  template: '<div id="hamburger" class="vcentercontainer" @click="togglenav">\
              <div class="flex">\
                <a class="vcentercontainer" href="#">\
                  <svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>\
                </a>\
                <a class="centerhelper">a</a>\
              </div>\
            </div>',
  methods: {
    togglenav: function () {
      this.$emit('togglenav');
    }
  }
});

Vue.component('notification', {
  props: ['text', 'notificationId'],
  template:
  `<div v-if="isShown" class="notification hpadded themecolor" @click="onNotificationRead" v-bind:class="{ 'notification-read-pending': loading }">
    <p>{{ text }}</p>
  </div>`,
  data: function () {
    return {
      isShown: true,
      loading: false,
    }
  },
  methods: {
    onNotificationRead: function () {
      this.loading = true;
      this.$http.post(
        '/api/v1/onNotificationAcknowledged',
        {notificationId: this.notificationId},
      ).then(() => {
        this.isShown = false;
      }).catch(() => {
        this.isShown = false;
      });
    }
  }
})

// Renders as a button, which opens a modal when clicked
Vue.component('login', {
  props: ['register', 'text'],
  template:
  `<div>
      <a class="open-login-modal" @click="showModal = true">{{ text }}</a>
      <modal :title="newUser ? 'Sign up' : 'Log in'" :show="showModal" @close-modal="closeModal">
        <p class="error-message" v-if="showLoginFailedMessage">Sorry, your username or password was invalid</p>
        <form class="center vertical vcentercontainer" action="/login" method="post" v-if="!newUser">
          <input class="hpadded" :class="{invalidInput: !emailIsValid}" type="email" name="email" v-model="email" placeholder="email">
          <br>
          <input class="hpadded" type="password" name="password" v-model="password" placeholder="password">
          <br>
          <input class="button submitButton" type="submit" value="Submit">
          <a.loginToggleButton @click="newUser = true">Or sign up instead</a>
        </form>
        <form class="center vertical vcentercontainer" action="/register" method="post" v-if="newUser">
          <input class="hpadded" :class="{invalidInput: !emailIsValid}" type="email" name="email" v-model="email" placeholder="@ucsb.edu email">
          <br>
          <input class="hpadded" type="password" name="password" v-model="password" placeholder="password">
          <br>
          <input class="hpadded" type="text" name="firstName" placeholder="first name">
          <br>
          <input class="hpadded" type="text" name="lastName" placeholder="last name">
          <br>
          <input class="hpadded" type="number" min="2000" name="yearStartedSchool" placeholder="year started school">
          <br>
          <input class="hpadded" type="text" name="lastKnownMajor" placeholder="current major(s)">
          <br>
          <input class="button submitButton" type="submit" value="Submit">
          <a.loginToggleButton @click="newUser = false">Back to login</a>
        </form>
      </modal>
  </div>`,
  data: function () {
    return {
      showModal: new URLSearchParams(window.location.search).get('login'),
      showLoginFailedMessage: new URLSearchParams(window.location.search).get('loginFailed'),
      email: '',
      password: '',
      newUser: !!this.register,
    }
  },
  methods: {
    closeModal: function () {
      this.showLoginFailedMessage = false;
      this.password = '';
      this.showModal = false;
    }
  },
  computed: {
    emailIsValid: function () {
      const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return this.email.match(emailPattern) != null || this.email === '';
    }
  }
});

Vue.component('modal', {
  props: {
    title: String,
    show: Boolean
  },
  template:
  `<div v-if="show">
    <div class="modal-backdrop-overlay" @click="close"/>
    <div class="modal">
      <h2>{{ title }}</h2>
      <slot></slot>
    </div>
  </div>`,
  methods: {
    close: function () {
      this.$emit('close-modal');
    }
  }
})
