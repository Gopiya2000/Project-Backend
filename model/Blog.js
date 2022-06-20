var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  Title: {
    type: String,
    required: true
  },
  Content: {
    type: String,
    required: true
  },
  Image: {
    type: String,
    required: true
  },
  Tag: [
    {
      Username: {
        type: String,
        required: true
      }
    }]
  ,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});
module.exports = mongoose.model("Blog", blogSchema)


