const mongodb = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    Picture: [{
        fileName: {
            type: String,
            required: true
          },
          file: {
            data: Buffer,
            contentType: image/png || image/jpeg
          },
          uploadTime: {
            type: Date,
            default: Date.now
          }
        }
    ],
    Bio: {
        type:Textarea
    }
});

module.exports = mongoose.model("Profile",profileSchema);