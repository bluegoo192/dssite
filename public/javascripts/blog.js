var app = new Vue({
  el: '#app',
  data: {
    transparentNav: false,
    blogMaxChars: 157,
    posts: [
      {
        title: "DjangoGirls Santa Barbara: a Web Development Workshop",
        id: 2,
        author: "Jonathan Hsu",
        date: "January 6, 2018",
        content: "![](/images/blogs/2/cover-photo.jpg)<sup>*Coaches and attendees with smiles on their faces after a long day of coding.*</sup>\n\nData Science at UCSB hosted Santa Barbara’s first ever DjangoGirls event on Saturday, November 18th, 2017. [DjangoGirls](https://djangogirls.org) is an organization which provides resources and sanctions events to help introduce more women into the male-dominated tech industry. The goal of the workshop was for participants who were unfamiliar with programming to get their feet wet and to do so by learning how to build a web application from scratch using a Python web development framework. To this end, we assembled a team of experienced coaches to guide attendees, who came with little to no prior coding experience, so they could leave the workshop having created and deployed personal blogs of their own. We've included links to a few of the blogs completed during the workshop at the end of the article.\n\nEvery \
        so often, Data Science at UCSB hosts technical workshops offering participants opportunities to explore new interests and learn skills relevant in the industry. Those who attended the previous workshop learned the fundamentals of SQL, a programming language used in database management. \
        Compared to previous workshops, the DjangoGirls workshop was meant to be much more comprehensive. It was to be a full-day experience through which participants would learn how to use a popular programming language called Python to create their own personal blogs. Due to limited resources coupled with a lofty goal, the workshop had to be selective; out of a pool of over 180 applicants, only 40 participants were accepted. For those who could not attend but are interested in learning what we covered, [here](https://tutorial.djangogirls.org/) is the tutorial provided by the DjangoGirls organization that guided the workshop.\n\nFirst\
         things first, to avoid complications on the day of the workshop, an 'installation party' was held the prior evening during which coaches helped participants get their machines set up with the tools they'd be using the next day. The installation party was split into two sessions to accommodate attendees using Windows as well as those using MacOS/Linux. Participants first installed Python followed by Atom, a text editor for writing their Python code. They were then introduced to the concept of virtual environments and then shown how to install Django using a package manager. The installation party finished with attendees setting up accounts with GitHub and PythonAnywhere, which they would be using to deploy, or publish, their applications to the internet.\n\nThe \
         day kicked off with breakfast - participants enjoyed bagels, bananas, and coffee to fuel them for the long day ahead. The coaches began the workshop by giving three brief presentations. The first presentation went over the workings of the internet and was meant to provide attendees with context on the ecosystem that they would be building in. Without getting too technical, coaches gave high-level explanations of the structure of the internet, how information travels through it, and how it works for users. In the second presentation, coaches introduced attendees to Python and its capabilities which included, but was not limited to, building a blog. \
         The coaches giving this presentation went as far as creating a rudimentary text-interface adventure game! They demoed the game with some participation from the audience before revealing the code to showcase the simplicity of developing in Python. The last presentation introduced the web development framework they'd be using, Django along with the [Model-View-Controller Design Pattern](https://djangobook.com/model-view-controller-design-pattern/) that participants would be employing through \
         Django.\n\n![](/images/blogs/2/game-participation.jpg)<sup>*Attendees participating in the interactive text game created by our coaches.*</sup>\n\nAfter having established a better understanding of what they'd be working with, participants were ready to begin coding. Attendees were split into teams of three to four, each of which was accompanied by one or two coaches. The nimble structure of the groups provided coaches with the opportunity to work closely with their teams, allowing for quicker iteration as well as deeper learning.\n\n![](/images/blogs/2/group-1.jpg)<sup>*Coaches and attendees introducing themselves shortly after teams were formed.*</sup>\n\nOnce\
          groups had settled in, the work began. Each group worked at its own pace, with some progressing surprisingly quickly. Around noon, teams paused for lunch, and at this point, most teams had just completed the deployment stage, which meant their applications were accessible through the internet. After finishing their sandwiches and salads, participants eagerly continued working on their applications, filling them with the functionality and content that would constitute their creations as blogs. By the end of the workshop, after a total of roughly six hours of development, most teams had successfully completed the tutorial. At this point, the majority of participants had fully functional applications, and were exploring the design elements of their blogs. After some last minute troubleshooting here and there, everyone gathered to close the event.\n\n![](/images/blogs/2/group-2.jpg)<sup>*White boards came in handy for visualizing certain ideas.*</sup>\n\nTo \
          wrap things up, coaches guided participants in reviewing what they had learned and accomplished during the workshop. The room bristled with laughter as participants recalled the common roadblocks and successes they encountered throughout the day. Additionally, attendees offered the chance to bring home a bluetooth speaker provided by Microsoft. To choose the winner, one of our coaches, Matthew, quickly spun up a python script for raffling as attendees followed along on the screen. Finally, to inspire our attendees and give them an idea of how they could take their work further, another one of our coaches, Raul, briefly presented his personal website which is slightly more complex, but was put together using nothing but Django.\n\n![](/images/blogs/2/raul-blog.jpg)<sup>*Raul sharing his personal website.*</sup>\n\nUltimately\
          , the workshop succeeding in its goal of demystifying the understandably intimidating concept of programming and introducing it to those who were unfamiliar with it; some attendees noted that they never would have guessed how easy it was to get started, and they all agreed that they were leaving the workshop much more comfortable working with their computers now that they'd built something with code. While the day was aimed at teaching attendees, our coaches also benefitted from it; one coach, Kaizen reported that 'teaching Django to \[his\] team provided \[him\] with a deeper, more solid understanding of the framework.' That's great, Kaizen! Our workshops, as are any of our other events, are hosted with the purpose of promoting learning, and we are happy to hear that this one was no exception. [Follow us](https://www.facebook.com/DataScienceUCSB/) to be notified when the next one comes around!\n\n![](/images/blogs/2/coaches-pic.jpg)\n\nHere \
          are some of the blogs created by our amazing participants during the workshop! <br>\n\n- [Carmen Galaz-García, 3rd year PhD student studying mathematics](http://carmengg.pythonanywhere.com/) <br>\n\n- [Cynthia Zhang, 1st year undergraduate student studying computer science](http://czhang19.pythonanywhere.com/) <br>\n\nClick [here](https://www.facebook.com/pg/DataScienceUCSB/photos/?tab=album&album_id=1247553482055196) to see more photos from the event."
      }, {
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
