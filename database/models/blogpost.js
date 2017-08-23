var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogpostSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  author_url: { type: String },
  creation_date: { type: Date, required: true },
  content: { type: String }
});

var Blogpost = mongoose.model("Blogpost", blogpostSchema, "blogposts");

module.exports = Blogpost;
