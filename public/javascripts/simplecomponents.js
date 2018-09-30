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

// Renders as a button, which opens a modal when clicked
Vue.component('login', {
  template:
  `<div>
      <a @click="showModal = true">Log In</a>
      <modal title="Log In" :show="showModal" @closeModalEvent="closeModal">
        <form>
          <input :class="{invalidInput: !emailIsValid}" type="email" name="email" v-model="email">
          <input type="password" name="password" v-model="password">
          <input type="submit" value="Submit">
        </form>
      </modal>
  </div>`,
  data: function () {
    return {
      showModal: false,
      email: '',
      password: ''
    }
  },
  methods: {
    closeModal: function () {
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
      this.$emit('closeModalEvent');
    }
  }
})
