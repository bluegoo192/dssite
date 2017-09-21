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
        image: "images/projects.jpg",
        description: "A blurb about our projects"
      },
      {
        name: "Workshops",
        image: "images/sql_workshop_2.jpg",
        description: "A blurb about our Workshops"
      },
      {
        name: "Data Talks",
        image: "images/data_talk.jpg",
        description: "A blurb about our Data Talks"
      },
      {
        name: "Networking Events",
        image: "images/graphiq.jpg",
        description: "A blurb about our Networking Events"
      },
      {
        name: "Hackathons",
        image: "images/hackathon.jpg",
        description: "A blurb about our Hackathons"
      },
      {
        name: "Consulting",
        image: "images/consulting.jpg",
        description: "A blurb about our Consulting"
      }
    ]
  },
  mounted: function () {
    this.show.active = this.whatwedos[0];
  }
})
