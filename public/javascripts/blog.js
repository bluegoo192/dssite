var app = new Vue({
  el: '#app',
  data: {
    solidNav: true,
    posts: [
      {
        name: "Test post please ignore",
        author: "Rick Sanchez",
        date: "April 20, 1969",
        content: "blah blah blah this is a sample blog post.  I wrote it on the airplane back from Seoul. Wow writing sucks, can't imagine why anyone does it.  Gonna stop now"
      }
    ],
    show: {
      mobilenav: false
    }
  }
})
