var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
    },
    Username: {
        type: String,
        required: true,
        unique: true
    },
    Mobile: {
        type: Number,
        required: true,
        unique: true,
    },
    Date: {
        type: Date,
        trim: true
    },
    Password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 12,
        trim: true,
        unique: true
    },
    Confirm: {
        type: String,
        required: true
    }
});

userSchema.methods.pre('save',(next) => {
    
})

module.exports = mongoose.model("User",userSchema);

