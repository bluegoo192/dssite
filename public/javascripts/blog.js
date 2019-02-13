function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var app = new Vue({
  el: '#app',
  data: {
    transparentNav: false,
    blogMaxChars: 157,
    posts: [],
    loading: true,
    show: {
      mobilenav: false,
      expandedPost: false
    }
  },
  methods: {
    process: function (post, showFull) {
      if (showFull) return marked(post);
      if (post.length > this.blogMaxChars) {
        post.long = true;
        return post.substring(0, this.blogMaxChars) + "...";
      } else {
        return post;
      }
    },
    compileMarkdown: function (raw) {
      return marked(raw);
    },
    expand: function (post) {
      console.log("hi")
      this.currentPost = post;
      this.show.expandedPost = true;
      history.pushState(null, "expand", `?post=${post.id}`);
    },
    closeExpanded: function () {
      this.show.expandedPost = false;
      history.pushState(null, "expand", "blog");
    }
  },
  mounted: function () {
    this.$http.get('/api/v1/blogPosts').then(response => {
      this.posts = response.body;
      this.loading = false;
    }).catch(error => {
      console.error(error);
    });
    var currentPostId = getParameterByName("post");
    console.log(currentPostId);
    if (currentPostId) {
      this.posts.forEach((post) => {
        if (post.id == currentPostId) this.expand(post);
      });
    }
  }
})
