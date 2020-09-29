const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const {
    GOOGLE_CLIENT: clientID,
    GOOGLE_SECRET: clientSecret,
    GOOGLE_CALLBACK: callbackURL,
} = process.env


module.exports = db => {
    const google = new GoogleStrategy(
        { clientID, clientSecret, callbackURL },
        (_access, _refresh, profile, done) => {
            const id = profile.id.concat(':', profile.provider)
            db.findById(id)
            .then(currentUser => {
                if(currentUser){
                    done(null, currentUser)
                } else {
                    db.createUser(id)
                    .then(data => done(null, data))
                    .catch(console.error)
                }
            })
        }
    )


    passport.serializeUser((profile, done) => {
        const id = profile.id.concat(':', profile.provider)
        db.findById(id).then(user => {
            done(null, id)
        })
        
        
    })
    
    passport.deserializeUser((id, done)=>{
        db.createUser(id)
            .then(data => done(null, data))
            .catch(console.error)
    })
    
    passport.use(google)

    return passport
}
