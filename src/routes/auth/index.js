const router = require('express').Router()
const passFn = require('../../lib/passport')

const { NODE_ENV = 'prod' } = process.env
const redirect = NODE_ENV === 'dev'
  ? 'http://localhost:3000'
  : '/'

  const redirectOnLogin = NODE_ENV === 'dev'
  ? 'http://localhost:3000/searchprofile/a'
  : '/searchprofile/a'

module.exports = db => {
  const passport = passFn(db)

  router.get('/google', passport.authenticate('google', {
    scope: ['openid']
  }))

  router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: redirect,
    successRedirect: redirectOnLogin,
  }))

  router.get('/logout', (req, res) => {
    req.logout()
    req.session = null
    res.redirect('/')
  })

  return router
}
