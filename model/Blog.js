const mongodb = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Content: {
        type: TextArea,
        required: true
    },
   Image: [{
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
      Tag: {
        name:String,
        id:String   
    },
    User:{
        type: String,
        required: true
    }
}
);

module.exports = mongoose.model("Blog",blogSchema)
    

