const profileController = client => (req, res, next) => {
    client.db('talentwyre').collection('profiles')
        .findOne({ id: req.params.id })
        .then(data => res.json(data))
        .catch(next)
}

module.exports = profileController
