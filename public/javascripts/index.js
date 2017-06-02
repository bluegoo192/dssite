var app = new Vue({
  el: '#app',
  data: {
    buzzwordCounter: 0,
    solidNav: false,
    buzzwords: [
      "machine learning",
      "data visualization",
      "scalable computing",
      "big data"
    ],
    show: {
      mobilenav: false
    }
  },
  methods: {
    trackPos: function() {
      var el = document.querySelector("#mainexpl");
      var pos = getPosition(el);
      if (pos.y <= 0) { this.solidNav = true; }
      else if (this.solidNav === true) { this.solidNav = false; }
    }
  },
  computed: {
    currentBuzzword: function () {
      if (this.buzzwordCounter >= this.buzzwords.length) {
        this.buzzwordCounter = 0;
      }
      return this.buzzwords[this.buzzwordCounter]
    }
  },
  mounted: function () {
    setInterval(function () {
      this.buzzwordCounter += 1
    }.bind(this), 3000)
  }
})
