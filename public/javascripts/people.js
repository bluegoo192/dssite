var app = new Vue({
  el: '#app',
  data: {
    solidNav: true,
    showPopupDescription: false,
    currentOfficer: {},
    show: {
      mobilenav: false
    },
    officers: [
      {
        name: "Jason Freeberg",
        file: "jason_freeberg.jpg",
        position: "President",
        description: "JSON"
      },
      {
        name: "Arthur Silverstein",
        file: "arthur_silverstein.jpg",
        position: "Director of IT",
        description: "oh dude hell yea!"
      },
      {
        name: "Timothy Nguyen",
        file: "timothy_nguyen.jpg",
        position: "Bus driver",
        description: "never wears pants"
      },
      {
        name: "Samantha Lee",
        file: "samantha_lee.jpg",
        position: "Asswipe",
        description: "Recently turned 21"
      },
      {
        name: "Shon SomethingOrOther",
        file: "shon_lastname.jpg",
        position: "Arthur's Assistant",
        description: "Likes coconuts"
      },
      {
        name: "Cindy SomethingOrOther",
        file: "cindy_lastname.jpg",
        position: "Out of town",
        description: "Codes"
      },
      {
        name: "Richa SomethingOrOther",
        file: "richa_lastname.jpg",
        position: "I don't know",
        description: "Works for Invoca!"
      }
    ]
  },
  methods: {
    getOfficerPath: function (filename) {
      return "/images/officers/"+filename
    },
    showDescription: function (officer) {
      this.currentOfficer = officer;
      this.showPopupDescription = !this.showPopupDescription;
    }
  }
})
