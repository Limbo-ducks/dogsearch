const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const {
    GOOGLE_CLIENT: clientID,
    GOOGLE_SECRET: clientSecret,
    GOOGLE_CALLBACK: callbackURL,
} = process.env

const google = new GoogleStrategy(
    { clientID, clientSecret, callbackURL },
    (_access, _refresh, profile, done) => done(null, profile)
)

module.exports = db => {
    passport.serializeUser((profile, done) => {
        const id = profile.id.concat(':', profile.provider)
        done(null, id)
    })
    
    passport.deserializeUser((id, done)=>{
        db.createUser(id)
            .then(data => done(null, data))
            .catch(console.error)
    })
    
    passport.use(google)

    return passport
}
