var app = new Vue({
  el: '#app',
  data: {
    transparentNav: false,
    blogMaxChars: 157,
    posts: [
      {
        title: "Test post please ignore",
        author: "Rick Sanchez",
        date: "April 20, 1969",
        content: "blah blah blah this is a sample blog post.  I wrote it on the airplane back from Seoul. Wow writing sucks, can't imagine why anyone does it.  Gonna stop now"
      },
      {
        title: "Another sample post",
        author: "Yancellor Chang",
        date: "April 20, 1969",
        content: "Holy hell I can't believe I have to write another one of these stupid sample posts. God fucking dammit lol.  I can't even get some lorem ipsum because this plane has no internet and Pages won't let my copy paste it's lorem ipsum for some reason.  Also I just realized, storing this content as a string is going to be pretty troublesome.  Gonna have to deal with newlines, quotation marks, backslashes..."
      },
      {
        title: "Yet another sample",
        author: "Beans",
        date: "April 20, 1969",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
      },
      {
        title: "Yet another sample",
        author: "Beans",
        date: "April 20, 1969",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
      }
    ],
    show: {
      mobilenav: false,
      expandedPost: false
    }
  },
  methods: {
    process: function (post, showFull) {
      if (showFull) return post.content;
      if (post.content.length > this.blogMaxChars) {
        post.long = true;
        return post.content.substring(0, this.blogMaxChars) + "...";
      } else {
        return post.content;
      }
    },
    expand: function (post) {
      console.log("hi")
      this.currentPost = post;
      this.show.expandedPost = true;
    }
  }
})
