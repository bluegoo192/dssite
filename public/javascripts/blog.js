var app = new Vue({
  el: '#app',
  data: {
    transparentNav: false,
    blogMaxChars: 157,
    posts: [
      {
        title: "UCSB Data Science and FACTOR Host Successful SQL Workshop",
        id: 1,
        author: "Jonathan Hsu",
        date: "May 24, 2016",
        content: "![](/images/blogs/1/raul_cover.jpg)\n\nThis\
         past Saturday (May 20th, 2017) UCSB Data Science and the Female Actuarial Organization (FACTOR) collaboratively hosted a SQL workshop. The allure of free refreshments and the opportunity to learn a useful skill brought more than 60 people out of bed on a Saturday morning to fill the Collabratory, located in the UCSB Library. For those who are unfamiliar, SQL (Structured Query Language) is a programming language used in database management systems. Raul Eulogio, who does data work at the Hospice of Santa Barbara, led the workshop and guided attendees through the concepts of SQL.\n\nIn the workshop, attendees learned SQL concepts necessary in utilizing MySQL, a relational database management system. To explain the concept of relational databases, Raul explored datasets such as the [iris dataset](https://archive.ics.uci.edu/ml/datasets/iris) and the [W3 mock-business dataset](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all).  Through a live \
        demonstration, Raul covered data subsetting techniques using SQL clauses such as `GROUP`, `JOIN`, and more, explaining each line of code as he progressed. Ultimately, open discussion and a whole lot of Googling helped attendees gain a solid understanding of relational databases as well as the SQL syntax.\n\nThings didn't end there, however; another goal of the workshop was to provide attendees with something to show for their mastery of basic SQL concepts. After Raul\
        completed his walkthrough of useful SQL concepts, attendees formed groups, working on exercises that allowed them to practice what they learned. Completion of the\
        exercises provided attendees with SQL scripts that they could upload to their GitHub profiles, showcasing their newly learned skills to potential employers.\
        \n\n![](/images/blogs/1/group_work.jpg)\n\nAttendees spent no more than a Saturday morning learning and applying a highly demanded skill. If you missed this workshop, don't worry, as there will be many more to come in the future. To stay updated, be sure to like [UCSB Data Science](https://www.facebook.com/DataScienceUCSB/) on Facebook for news on upcoming workshops and events.\
        \n\n![](/images/blogs/1/happy_members.jpg)\n\nFor more information regarding SQL applications, check out [this project](https://www.inertia7.com/projects/5) on inertia7, a three-part guide created by Raul himself."
      }
    ],
    show: {
      mobilenav: false,
      expandedPost: false
    }
  },
  methods: {
    process: function (post, showFull) {
      if (showFull) return marked(post.content);
      if (post.content.length > this.blogMaxChars) {
        post.long = true;
        return post.content.substring(0, this.blogMaxChars) + "...";
      } else {
        return post.content;
      }
    },
    compileMarkdown: function (raw) {
      return marked(raw);
    },
    expand: function (post) {
      console.log("hi")
      this.currentPost = post;
      this.show.expandedPost = true;
    }
  }
})
