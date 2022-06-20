var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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
        trim: true,
        unique: true
    },
    Confirm: {
        type: String,
        required: true
    }
});

// //Secure Password
// userSchema.pre('save',async(next) => {
//     if(this.isModified('Password')){
//         this.Password = bcrypt.hash(this.Password,12)
//         this.Confirm = bcrypt.hash(this.Confirm,12)
//     }
//     next();
// }
// )

// userSchema.methods.pre('save',(next) => {
//     if(this.isModified('Password')){
//         bcrypt.hash(this.Password,8,(err,hash) => {
//             if(err) return next(err);
//             this.Password = hash;
//             next();
//         });
//     }
// });

module.exports = mongoose.model("User", userSchema);

