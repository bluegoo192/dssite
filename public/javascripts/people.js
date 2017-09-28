var app = new Vue({
  el: '#app',
  data: {
    transparentNav: false,
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
        contactinfo: {
        },
        current: false
      },
      {
        name: "Raul Eulogio",
        file: "samantha_lee.jpg",
        position: "Vice President",
        description: "JSON",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Samantha Lee",
        file: "samantha_lee.jpg",
        position: "Vice President",
        description: "Hi! I'm a fourth year Statistics major.  In my free time, I like reading Medium, swimming, blogging, and learning. Data is fun!!!!",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Ryan Poff",
        file: "arthur_silverstein.jpg",
        position: "Finance",
        description: "JSON",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Moritz Droste",
        file: "moritz_droste.jpg",
        position: "Club Accountant",
        description: "I'm a second-year Economics and Accounting major that also loves programming! I can be a bit quiet and reserved sometimes, but really enjoy talking to people about stuff I'm passionate about.",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Ananya Havaru",
        file: "timothy_nguyen.jpg",
        position: "Finance",
        description: "JSON",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Calvin Wang",
        file: "calvin_wang.jpg",
        position: "Something about marketing",
        description: "The Wang",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Timothy Nguyen",
        file: "timothy_nguyen.jpg",
        position: "Marketing",
        description: "never wears pants",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Jonathan Hsu",
        file: "samantha_lee.jpg",
        position: "Marketing",
        description: "JSON",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Richa Wadaskar",
        file: "richa_lastname.jpg",
        position: "Marketing",
        description: "Works for Invoca!",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Holly Cheek",
        file: "jason_freeberg.jpg",
        position: "Operations",
        description: "JSON",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Matthew Peterschmidt",
        file: "samantha_lee.jpg",
        position: "Operations",
        description: "JSON",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Daniel Fields",
        file: "daniel_fields.jpeg",
        position: "Officer of Operations",
        description: "I am a third year Statistical Sciences major. I love to learn about and explore the world. I strive to always be happy, healthy, and helpful.",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Eri Kawakami",
        file: "cindy_lastname.jpg",
        position: "Operations",
        description: "JSON",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Arthur Silverstein",
        file: "arthur_silverstein.jpg",
        position: "Director of IT",
        description: "oh dude hell yea!",
        contactinfo: {
          github: "http://www.github.com/bluegoo192",
          linkedin: "https://www.linkedin.com/in/arthur-silverstein/",
          email: "mailto:arthursilverstein@umail.ucsb.edu"
        },
        current: false
      },
      {
        name: "Shon SomethingOrOther",
        file: "shon_lastname.jpg",
        position: "Arthur's Assistant",
        description: "Likes coconuts",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Cindy SomethingOrOther",
        file: "cindy_lastname.jpg",
        position: "Out of town",
        description: "Codes",
        contactinfo: {
        },
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
