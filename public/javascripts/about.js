var app = new Vue({
  el: '#app',
  data: {
    transparentNav: false,
    show: {
      mobilenav: false,
      active: {
        name: "Projects",
        description: "A blurb about our projects"
      }
    },
    whatwedos: [
      {
        name: "Projects",
        image: "images/projects.jpg",
        description: "Projects are the main focus of Data Science at UCSB.  Each quarter, members work in groups to complete a project of their choosing and present it at our project showcase.  Past projects have ranged from diagnosing breast cancer with computer vision to grouping Spotify songs by genre."
      },
      {
        name: "Workshops",
        image: "images/sql_workshop_2.jpg",
        description: "Data Science at UCSB hosts workshops throughout the year that teach various programs to students. With assistance from skilled members, participants learn the basics of the program and demonstrate their knowledge by working on exercises or creating projects to showcase what they've learned. These events offer free food, free knowledge, and great opportunities to make new friends. Our organization has hosted workshops for SQL, Python, and Django, to name a few."
      },
      {
        name: "Data Talks",
        image: "images/data_talk.jpg",
        description: "Our club hosts data talks that allow students to gain valuable insight regarding the functions of data-driven companies in the industry. The companies hosted in our data talks are mostly local businesses in the industry. These talks not only further our students understanding of what career paths await for data science, but also offer valuable networking opportunities as well. Companies that have participated in the past include: Microsoft, Farmers Insurance, PwC, and Graphiq."
      },
      {
        name: "Hackathons",
        image: "images/hackathon.jpg",
        description: "Our club partners with local companies to bring our members opportunities to work with those in the field. At private hackathons, attendees are offered the chance to hone practical skills under the guidance of industry professionals and build a network ground in meaningful relationships."
      },
      {
        name: "Consulting",
        image: "images/consulting.jpg",
        description: "We provide opportunities to complete optional, pro-bono consulting services.  Unlike other clubs, our consulting focuses more on tech than business -- we like to get our hands dirty with actually building new apps and services."
      }
    ]
  },
  mounted: function () {
    this.show.active = this.whatwedos[0];
  }
})
