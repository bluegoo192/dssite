var app = new Vue({
  el: '#app',
  data: {
    transparentNav: false,
    showPopupDescription: false,
    currentOfficer: {},
    show: {
      mobilenav: false
    },
    featured: [
      {
        name: "Fiona Reid"
      },
      {
        name: "Alex Mathgod"
      }
    ],
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
        file: "raul_eulogio.jpg",
        position: "Vice President",
        description: "I'm an alumni of UCSB, working as a data analyst. An aspiring data jedi with a love for teaching and all things data related. Got that LOUD on deck HMU ",
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
          github: "www.github.com/samanthaklee",
          linkedin: "www.linkedin.com/in/ksamanthalee"
        },
        current: false
      },
      {
        name: "Ryan Poff",
        file: "ryan_poff.jpg",
        position: "Chief Accountant",
        description: "Ryan, a fourth year senior, is our cheif accountant. He has been with the club for two years now and enjoys baseball, turtles, and watching every Jack Black movie back to back.",
        contactinfo: {
          linkedin: "https://www.linkedin.com/in/ryan-poff-123575124/"
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
        description: "Third Year Statistics Major who wants to pet ur dog",
        contactinfo: {
          github: "https://github.com/timothydnguyen",
          linkedin: "https://www.linkedin.com/in/timothy-d-nguyen/"
        },
        current: false
      },
      {
        name: "Jonathan Hsu",
        file: "jonathan_hsu.png",
        position: "Marketing",
        description: "I am a third year Global Studies major pursuing a minor in writing. Enjoy dogs, video games, and reading tech news.",
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
        description: "I'm a third year computer science major who likes hiking, playing piano, and DIY.",
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
      // clear current selection
      // for some reason, some mobile browsers try to select text when people tap the tile
      var sel = window.getSelection ? window.getSelection() : document.selection;
      if (sel) {
          if (sel.removeAllRanges) {
              sel.removeAllRanges();
          } else if (sel.empty) {
              sel.empty();
          }
      }

      this.currentOfficer = officer;
      this.showPopupDescription = !this.showPopupDescription;
      officer.current = this.showPopupDescription
    }
  }
})
