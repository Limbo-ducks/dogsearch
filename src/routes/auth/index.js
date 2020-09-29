const router = require('express').Router()
const passFn = require('../../lib/passport')

const { NODE_ENV = 'prod' } = process.env
const redirect = NODE_ENV === 'dev'
  ? 'http://localhost:3000/login'
  : '/login'

  const redirectOnLogin = NODE_ENV === 'dev'
  ? 'http://localhost:3000/'
  : '/'

module.exports = db => {
  const passport = passFn(db);

  router.get('/google', passport.authenticate('google', {
    scope: ['openid']
  }))

  router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: redirect,
    successRedirect: redirectOnLogin,
  }))

  // router.get('/google/callback', (req, res, next) => {
  //   passport.authenticate('google', (err, user, info) => {
  //     console.log(req.session);
  //     req.logIn(user, function(err){
  //       if (err) { return next(err); }
  //     });
  //     res.redirect(`/`)
  //   })(req, res, next);
  // })
  
  router.get('/logout', (req, res) => {
    req.logout()
    req.session = null
    res.redirect('/')
  })

  return router
}
