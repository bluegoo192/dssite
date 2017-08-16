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
        description: "JSON",
        current: false
      },
      {
        name: "Arthur Silverstein",
        file: "arthur_silverstein.jpg",
        position: "Director of IT",
        description: "oh dude hell yea!",
        current: false
      },
      {
        name: "Timothy Nguyen",
        file: "timothy_nguyen.jpg",
        position: "Bus driver",
        description: "never wears pants",
        current: false
      },
      {
        name: "Samantha Lee",
        file: "samantha_lee.jpg",
        position: "Asswipe",
        description: "Recently turned 21",
        current: false
      },
      {
        name: "Shon SomethingOrOther",
        file: "shon_lastname.jpg",
        position: "Arthur's Assistant",
        description: "Likes coconuts",
        current: false
      },
      {
        name: "Cindy SomethingOrOther",
        file: "cindy_lastname.jpg",
        position: "Out of town",
        description: "Codes",
        current: false
      },
      {
        name: "Richa SomethingOrOther",
        file: "richa_lastname.jpg",
        position: "I don't know",
        description: "Works for Invoca!",
        current: false
      },
      {
        name: "Calvin Wang",
        file: "calvin_wang.jpg",
        position: "Something about marketing",
        description: "The Wang",
        current: false
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
      officer.current = this.showPopupDescription
    }
  }
})
