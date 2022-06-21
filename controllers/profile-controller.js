var Profile = require('../model/Profile');
var User = require('../model/User');
const getProfile = async (req, res, next) => {
    let profile;
    try {
        profile = await Profile.find();
    } catch (err) {
        console.log(err);
    }
    if (!profile) {
        return res.status(404).json({ message: "No profile found " });
    }
    return res.status(200).json({ profile });
};

const newProfile = async (req, res, next) => {
    const { picture,bio,user } = req.body;

    let existingProfile;
    try {
        existingProfile = await Profile.findOne({ bio });
    } catch (err) {
        console.log(err);
    }
    if (existingProfile) {
        return res.status(400).json({ message: "Profile already created" })
    }
        const profile = new Profile({
            picture,
            bio,
            user
        });

        try {
            await profile.save();
        } catch (err) {
            return console.log(err);
        }
        return res.status(201).json({ profile })
    };

    const updateProfile = async (req,res,next) => {
        const {picture,bio } = req.body;
        const profileID = req.params.id;
        let profile;
        try{
            profile = await Profile.findByIdAndUpdate(profileID,{
                picture,
                bio
             })
        }catch(err){
            return console.log(err);
        }
      if(!profile) {
        return res.status(500).json({message:"Unable to update the profile"})
      }  
      return res.status(200).json({ profile })
    };

    module.exports = {
        getProfile: getProfile,
        newProfile: newProfile,
        updateProfile:updateProfile
    }