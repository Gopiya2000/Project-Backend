const mongodb = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  Picture: {
    type: String,
    required: true
  },
  Bio: {
    type: String
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = mongoose.model("Profile", profileSchema);