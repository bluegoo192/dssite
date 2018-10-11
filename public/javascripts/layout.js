var defaultApp = {
  el: '#app',
  data: {
    transparentNav: false,
    show: {
      mobilenav: false,
      loginModal: false,
      newUser: false,
    }
  }
};
if (app !== null) {
  app.data = Object.assign(defaultApp.data, app.data);
}
var ds = new Vue(Object.assign(defaultApp, app));