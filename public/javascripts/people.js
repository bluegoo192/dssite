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
    executiveOfficers: [
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
        name: "Brian Lim",
        file: "brian_lim.jpg",
        position: "President",
        description: "",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Claire Qian",
        file: "claire_qian.PNG",
        position: "Vice President",
        description: "I am a fourth year statistics major who enjoys going on food adventures, traveling, and dogs!",
        contactinfo: {
          linkedin: "https://www.linkedin.com/in/claire-qian-6ba818120/"
        },
        current: false
      },
      {
        name: "Yash Rane",
        file: "yash_rane.jpg",
        position: "Vice President",
        description: "",
        contactinfo: {
        },
        current: false
      },
    ],
    projectOfficers: [
      {
        name: "Natalie Rozak",
        file: "natalie_rozak.JPG",
        position: "Project Group Director",
        description: "I'm a third year Statistics and Data Science major who enjoys hiking, baking desserts, and horseback riding. I want to be a Data Scientist because I'll get to use data to solve important real-world problems.",
        contactinfo: {
          linkedin: "https://www.linkedin.com/in/natalie-rozak-74147b13b/",
          github: "https://github.com/nsrozak",
          email: "natalie.s.rozak@gmail.com"
        },
        current: false
      },
      {
        name: "Parker Glenn",
        file: "parker_glenn.jpg",
        position: "Project Group Director",
        description: "I'm a fourth year Linguistics major who loves doing any type of Data Science related to NLP. When I'm not being a Data Science nerd, I love to surf and play jazz guitar.",
        contactinfo: {
          linkedin: "https://www.linkedin.com/in/parker-glenn5/",
          github: "https://github.com/parkervg",
          email: "pglenn@ucsb.edu"
        },
        current: false
      },
    ],
    financeOfficers: [
      {
        name: "Luis Aragon",
        file: "luis_aragon.jpg",
        position: "Finance",
        description: "I am a fourth year Statistics Major and I love coffee and climbing!",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Amiya Dutta",
        file: "amiya_dutta.jpeg",
        position: "Finance",
        description: "I'm a third year financial math and statistics major with an English minor. I love hiking, baking, frisbee, and The Office. You can find me working on my second novel in my free time.",
        contactinfo: {
          linkedin: "https://www.linkedin.com/in/amiya-dutta-b40b40192/",
          email: "amiyadutta@ucsb.edu"
        },
        current: false
      },
      {
        name: "Alice Cheng",
        file: "placeholder.png",
        position: "Finance",
        description: "",
        contactinfo: {
        },
        current: false
      },
    ],
    marketingOfficers: [
      {
        name: "Sunny (Sung Hee) Hong",
        file: "sunny_hong.JPG",
        position: "Marketing",
        description: "I’m Sunny a fourth-year statistics and data science major heavenly involved in both Data Science and Epic. I am a coffee shop connoisseur who loves to spend intentional quality time with friends. I am currently working on an interactive map through power BI by using data-driven decision made through Natural language Processing , AB testing, and data visualizations.",
        contactinfo: {
          linkedin: "https://www.linkedin.com/in/sung-hee-hong-07b84216a/",
          github: "https://github.com/sunny7x7/TrendingApp"
        },
        current: false
      },
      {
        name: "Madeline Li",
        file: "madeline_li.jpg",
        position: "Marketing",
        description: "Hi! I'm a second year statistics and data science major and Chinese minor. In my free time, I love reading, dancing, martial arts, and board games.",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Sifeng (Miranda) Li",
        file: "sifeng_li.jpeg",
        position: "Marketing",
        description: "Hey I’m Miranda! I’m a junior majoring in Stats, Data Science and Computer science. I love traveling, tasting good food, and reading! My primary interest with data science is data analysis with real applications.",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Jackie Zhang",
        file: "placeholder.png",
        position: "Marketing",
        description: "",
        contactinfo: {
        },
        current: false
      },
    ],
    operationsOfficers: [
      {
        name: "Ishana Narayanan",
        file: "ishanana_rayanan.jpg",
        position: "Operations",
        description: "I'm a second year computer science & statistics and data science double major who loves dancing, hiking, and going on food adventures.",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Jasmine Kellogg",
        file: "jasmine_kellogg.jpg",
        position: "Operations",
        description: "I'm a fourth year Statistics and Data Science major who enjoys reading, watching sports, and drinking excessive amounts of coffee!",
        contactinfo: {
          linkedin: "https://www.linkedin.com/in/jasmine-kellogg",
          email: "jkellogg@ucsb.edu"
        },
        current: false
      },
      {
        name: "Evan Altshule",
        file: "evan_altshule.jpeg",
        position: "Operations",
        description: "I'm a third year computer science major who enjoys exercising and bagels!",
        contactinfo: {
          email: "ealtshule@ucsb.edu"
        },
        current: false
      },
      {
        name: "Katie Huynh",
        file: "katie_huynh.jpeg",
        position: "Operations",
        description: "I’m a first year computer science major interested in data science and its applicability to the real world. In my free time, I love trying new boba milk tea spots (despite my lactose intolerance) and adventuring with my friends.",
        contactinfo: {
          linkedin: "http://linkedin.com/in/katie-huynh-34bb88191"
        },
        current: false
      },
    ],
    engineeringOfficers: [
      {
        name: "Bryan Wu",
        file: "bryan_wu.png",
        position: "Website Engineer",
        description: "I'm a fourth year computer science major who enjoys coffee, photography, and chicken nuggets.",
        contactinfo: {
          linkedin: "https://www.linkedin.com/in/wu-bryan/",
          email: "bryanwu@ucsb.edu"
        },
        current: false
      },
      {
        name: "Justin Dong",
        file: "justin_dong.jpg",
        position: "Website Engineer",
        description: "I am a third year Computer Science major with an intended minor in Statistics. I enjoy photography, traveling, watching TV and eating food in my free time.",
        contactinfo: {
          linkedin: "https://linkedin.com/in/justindong1",
          github: "https://github.com/justindong1",
          email: "justin.s.dong99@gmail.com"
        },
        current: false
      },
      {
        name: "Matthew Ho",
        file: "placeholder.png",
        position: "Website Engineer",
        description: "",
        contactinfo: {
        },
        current: false
      },
      {
        name: "Amelia Meyer",
        file: "placeholder.png",
        position: "Website Engineer",
        description: "",
        contactinfo: {
        },
        current: false
      },
    ],
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
