const router = require('express').Router()
const passFn = require('../../lib/passport')

module.exports = db => {
  const passport = passFn(db)

  router.get('/google', passport.authenticate('google', {
    scope: ['openid']
  }))

  router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/',
    successRedirect: 'http://localhost:3000',
  }))

  router.get('/logout', (req, res) => {
    req.logout()
    req.session = null
    res.redirect('/')
  })

  return router
}
