var app = new Vue({
  el: '#app',
  data: {
    transparentNav: false,
    show: {
      mobilenav: false,
      active: {
        name: "Projects",
        description: "A blurb about our projects"
      }
    },
    whatwedos: [
      {
        name: "Projects",
        description: "A blurb about our projects"
      },
      {
        name: "Workshops",
        description: "A blurb about our Workshops"
      },
      {
        name: "Data Talks",
        description: "A blurb about our Data Talks"
      },
      {
        name: "Networking Events",
        description: "A blurb about our Networking Events"
      },
      {
        name: "Hackathons",
        description: "A blurb about our Hackathons"
      },
      {
        name: "Consulting",
        description: "A blurb about our Consulting"
      }
    ]
  },
  mounted: function () {
    this.show.active = this.whatwedos[0];
  }
})
