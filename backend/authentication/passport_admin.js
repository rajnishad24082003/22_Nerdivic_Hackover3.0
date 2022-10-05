
const passport = require("passport");
const User = require("../schema/admin");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function (passport){
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/google/callback/admin"
  },
  async (accessToken, refreshToken, profile,done) =>{
    const newUser = {
        googleid:profile.id,
        displayname:profile.displayName,
        firstname:profile.name.givenName,
        userimage:profile.photos[0].value
    }
    try {
        let check= await User.findOne({googleid:profile.id})
        if(check){
            done(null,check);
        }
        else
        {
            check =await User.create(newUser);
            done(null,check);
        }
    } catch (error) {
        console.log(error)
    }
  }
));

passport.serializeUser((check, done) => {
    done(null, check.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })
}