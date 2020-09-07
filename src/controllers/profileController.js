const profileController = db => (req, res, next) => {
  db.findById(req.params.id)
    .then(data => res.json(data))
    .catch(next)
}

module.exports = profileController
