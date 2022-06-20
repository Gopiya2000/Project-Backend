var User = require('../model/User');
var bcrypt = require('bcryptjs');
const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if (!users) {
        return res.status(404).json({ message: "No Users found " });
    }
    return res.status(200).json({ users });
};

const signup = async (req, res, next) => {
    const { Name, Email, Username, Mobile, Date, Password, Confirm } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({Username});
    } catch (err) {
        console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message: "User already exists.Login instead."})
    }
    const hashedPassword = bcrypt.hashSync(Password);
    const user = new User({
        Name,
        Email,
        Username,
        Mobile,
        Date,
        Password,
        Confirm 
    });

    try{
        await user.save();
    }catch(err){
       return console.log(err);
    }
    return res.status(201).json({user})
}

const login = async(req,res,next) => {
    const{Username,Password} =req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({Username});
    } catch (err) {
        console.log(err);
    }
    if(!existingUser){
        return res.status(404).json({message: "Couldn't find user by this username"});
    }
    const isPasswordCorrect = bcrypt.compareSync(Password,existingUser.Password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Incorrect Password"})
    }
    return res.status(200).json({message:"Login Successfull"})

}
module.exports = {
    getUser : getAllUser,
    signUp : signup,
    login : login
}
//module.exports = getAllUser
// module.exports = signup;
// module.exports = login;