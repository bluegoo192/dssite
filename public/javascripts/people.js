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
      // {
      //   name: "Jason Freeberg",
      //   file: "jason_freeberg.jpg",
      //   position: "Retired but beloved",
      //   description: "Jason is the founding President of the organization and a fourth-year Statistics major. He will be working at Microsoft following his graduation in June.",
      //   contactinfo: {
      //     linkedin: "https://www.linkedin.com/in/jfreeberg/",
      //     website: "http://jasonfreeberg.com"
      //   },
      //   current: false
      // },
      // {
      //   name: "Raul Eulogio",
      //   file: "raul_eulogio.jpg",
      //   position: "Co-President",
      //   description: "I'm an alumni of UCSB, working as a data analyst. An aspiring data jedi with a love for teaching and all things data related.",
      //   contactinfo: {
      //   },
      //   current: false
      // },
      // {
      //   name: "Samantha Lee",
      //   file: "samantha_lee.jpg",
      //   position: "Co-President",
      //   description: "Hi! I'm a fourth year Statistics major.  In my free time, I like reading Medium, swimming, blogging, and learning. Data is fun!!!!",
      //   contactinfo: {
      //     github: "www.github.com/samanthaklee",
      //     linkedin: "www.linkedin.com/in/ksamanthalee"
      //   },
      //   current: false
      // },
      // {
      //   name: "Ryan Poff",
      //   file: "ryan_poff.jpg",
      //   position: "Chief Accountant",
      //   description: "Ryan, a fourth year senior, is our chief accountant. He has been with the club for two years now and enjoys baseball, turtles, and watching every Jack Black movie back to back.",
      //   contactinfo: {
      //     linkedin: "https://www.linkedin.com/in/ryan-poff-123575124/"
      //   },
      //   current: false
      // },
      {
        name: "Timothy Nguyen",
        file: "timothy_nguyen.png",
        position: "President",
        description: "I'm a fourth year statistics major who enjoys reading, the beach, and reading at the beach. My primary interest with data science is practical application of machine learning (especially computer vision) for task automation and anomaly detection. Why yes, I'd love to meet your dog.",
        contactinfo: {
          github: "https://github.com/timothydnguyen",
          linkedin: "https://www.linkedin.com/in/timothy-d-nguyen/",
          email: "nguyen.d.timothy@gmail.com"
        },
        current: false
      },
      {
        name: "Ananya Haravu",
        file: "ananya_haravu.jpg",
        position: "Vice President",
        description: "I am a third-year financial math and statistics major who has a passion for photography, music, martial arts, and books!",
        contactinfo: {
          email: "aharavu@gmail.com"
        },
        current: false
      },
      {
        name: "Calvin Wang",
        file: "calvin_wang.jpg",
        position: "Vice President",
        description: "I'm a 4th year CS major in the College of Creative Studies. My primary interest with data science is applied AI in the medical field.",
        contactinfo: {
          linkedin: "https://www.linkedin.com/in/calvinwang0628/",
          github: "https://github.com/calvin-is-seksy"
        },
        current: false
      },
      {
        name: "Arthur Silverstein",
        file: "arthur_silverstein.jpg",
        position: "Director of IT",
        description: "I'm a fourth year computer science major who likes hiking, playing piano, and DIY.",
        contactinfo: {
          github: "http://www.github.com/bluegoo192",
          linkedin: "https://www.linkedin.com/in/arthur-silverstein/",
          email: "mailto:arthursilverstein@umail.ucsb.edu"
        },
        current: false
      },
      {
        name: "Brian Lim",
        file: "brian_lim.jpg",
        position: "Project Group Manager",
        description: "",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Yash Rane",
        file: "yash_rane.jpg",
        position: "Project Group Manager",
        description: "",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Moritz Droste",
        file: "moritz_droste.jpg",
        position: "Club Accountant",
        description: "I'm a third-year Economics and Accounting major that also loves programming! I can be a bit quiet and reserved sometimes, but really enjoy talking to people about stuff I'm passionate about.",
        contactinfo: {
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
        file: "richa_wadaskar.jpg",
        position: "Marketing",
        description: "Richa is a 3rd year honors undergraduate student at UCSB, and is pursuing a B.S. in Computer Science. In her free time, she enjoys coding, surfing, climbing, hiking, and dancing.",
        contactinfo: {
          linkedin: "https://www.linkedin.com/in/richa-wadaskar/",
          github: "https://github.com/richawadaskar"
        },
        current: false
      },
      {
        name: "Luke Dorsey",
        file: "luke_dorsey.JPG",
        position: "Marketing",
        description: "Hey everyone! I am a fourth year communication major and I love to read books and write my own creative fiction sometimes. My interest in data science stems from its application within the field of journalism and how data can be used as a new form of storytelling.",
        contactinfo: {
          email: "lmd@ucsb.edu"
        },
        current: false
      },
      // {
      //   name: "Holly Cheek",
      //   file: "holly_cheek.jpg",
      //   position: "Operations",
      //   description: "I am a second year actuarial science major with a passion for colorguard, spinning and dancing with flags or sabres.",
      //   contactinfo: {
      //     linkedin: "https://www.linkedin.com/in/holly-cheek-809004101/"
      //   },
      //   current: false
      // },
      // {
      //   name: "Matthew Peterschmidt",
      //   file: "matthew_peterschmidt.jpg",
      //   position: "Operations",
      //   description: "",
      //   contactinfo: {
      //   },
      //   current: false
      // },
      {
        name: "Daniel Fields",
        file: "daniel_fields.jpeg",
        position: "Finance",
        description: "Hello, my name is Daniel Fields. I am a fourth year Statistical Sciences Major, an Officer of Finance, and a Data Science Tutor at UCSB. In my free time I like to go running, swim , lift , listen to music, and study politics.",
        contactinfo: {
          linkedin: "https://www.linkedin.com/in/danielfields365/",
          email: "dfields@ucsb.edu"
        },
        current: false
      },

      // {
      //   name: "Shon Inouye",
      //   file: "shon_inouye.jpg",
      //   position: "Arthur's Assistant",
      //   description: "I'm a fourth year Statistics major and aspiring data scientist who enjoys doing Judo and playing the ukulele.",
      //   contactinfo: {
      //     github: "https://github.com/Inouyesan",
      //     linkedin: "https://www.linkedin.com/in/shoninouye/"
      //   },
      //   current: false
      // },
      // {
      //   name: "Cindy Lu",
      //   file: "cindy_lu.jpg",
      //   position: "IT",
      //   description: "Hi!! I’m a second computer science major. I enjoy hot yoga, hiking and pugs.",
      //   contactinfo: {
      //   },
      //   current: false
      // },
      {
        name: "Bryan Wu",
        file: "bryan_wu.png",
        position: "IT",
        description: " I'm a third year computer science major who enjoys coffee.",
        contactinfo: {
          linkedin: "https://www.linkedin.com/in/wu-bryan/"
        },
        current: false
      },
      {
        name: "Jonathan Tsegaye",
        file: "jonathan_tsegaye.jpg",
        position: "IT",
        description: "I really like talking to people and I really like numbers. Bridging the gap between useful information and the people that could most benefit from that knowledge are what draw me to data science, but I stay for the pretty graphs. I've moved from Computer Science to Mathmatical Sciences, to finally Statistical Science in my fifth and final year. I love to go snowboarding on Mammoth Mountain when I can find the time between midterms, and read books in the summer faster than I can binge watch the Netflix adaptation.",
        contactinfo: {
          linkedin: "https://www.linkedin.com/in/jonathantsegaye/",
          email: "jontseg@gmail.com"
        },
        current: false
      },
      {
        name: "Justin Dong",
        file: "justin_dong.jpg",
        position: "Operations",
        description: "I am a second year Computer Science major with an intended minor in Statistics. I enjoy photography, traveling, watching TV and eating food in my free time.",
        contactinfo: {
          linkedin: "https://linkedin.com/in/justindong1",
          github: "https://github.com/justindong1",
          email: "justin.s.dong99@gmail.com"
        },
        current: false
      },
      {
        name: "Shakuntala Mitra",
        file: "shakuntala_mitra.jpg",
        position: "Operations",
        description: "I'm a fourth year Biochemistry-Molecular Biology major with a Statistical Science minor. When I'm not in the lab doing research, you can find me volunteering at the hospital, going for a run, or drinking boba! My interests in data science are applications of machine learning in solving computational biology problems.",
        contactinfo: {
          github: "https://github.com/dna-witch",
          email: "shakuntala_mitra@ucsb.edu"
        },
        current: false
      },
      {
        name: "Claire Qian",
        file: "claire_qian.PNG",
        position: "Operations",
        description: "I am a third year statistics major who enjoys going on food adventures, traveling, and dogs!",
        contactinfo: {
          linkedin: "https://www.linkedin.com/in/claire-qian-6ba818120/"
        },
        current: false
      },
      {
        name: "Jay Singh",
        file: "jay_singh.jpg",
        position: "Operations",
        description: "Hey there! I'm just a dude who loves learning and wants to help people. Come talk to me about whatever you're passionate about!",
        contactinfo: {
          website:"http://jaydsingh.com",
          linkedin: "https://www.linkedin.com/in/jay-singh-714958101",
          github: "http://github.com/JayDSingh/",
          email: "jay.d.singh5@gmail.com"
        },
        current: false
      },
      {
        name: "Luis Aragon",
        file: "luis_aragon.jpg",
        position: "Finance",
        description: "I am a third year Statistics Major and I love coffee and climbing!",
        contactinfo: {
        },
        current: false
      },
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
