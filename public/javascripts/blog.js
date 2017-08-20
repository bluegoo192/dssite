var app = new Vue({
  el: '#app',
  data: {
    solidNav: true,
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
      }
    ],
    show: {
      mobilenav: false
    }
  }
})
