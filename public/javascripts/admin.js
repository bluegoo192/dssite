var app = new Vue({
  el: '#app',
  data: {
    transparentNav: false,
    show: {
      mobilenav: false
    },
    members: [],
    loading: false,
  },
  methods: {
    downloadMembers: function () {
      this.loading = true;
      this.$http.post('/api/v1/members').then(response => {
        this.members = response.body;
        this.loading = false;
      })
    }
  }
})
