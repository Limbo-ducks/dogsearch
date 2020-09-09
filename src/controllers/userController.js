const R = require('ramda')

const isFilledPath = path => R.pipe(
  R.path(path),
  R.ifElse(
    R.is(Number),
    R.T,
    R.pipe(R.length, R.gt(R.__, 0))
  )
)
const allPathsFilled = list => R.allPass(list.map(isFilledPath))

const isComplete = allPathsFilled([
  [ 'name' ],
  [ 'citizenship' ],
  [ 'age' ],
  [ 'eyeColor' ],
  [ 'hairColor' ],
  [ 'hairLength' ],
  [ 'gender' ],
  [ 'ethnicity' ],
  [ 'accent' ],
  [ 'languages'],
  [ 'contact', 'address' ],
  [ 'contact', 'city' ],
  [ 'contact', 'email' ],
  [ 'contact', 'phone' ],
  [ 'measurements', 'height' ],
  [ 'measurements', 'weight' ],
  [ 'measurements', 'bodyType' ],
  [ 'measurements', 'shirtSize' ],
  [ 'measurements', 'sleeveLength' ],
  [ 'measurements', 'neck' ],
  [ 'measurements', 'jacketChest' ],
  [ 'measurements', 'jacketLength' ],
  [ 'measurements', 'waist' ],
  [ 'measurements', 'inseam' ],
  [ 'measurements', 'shoeWidth' ],
  [ 'measurements', 'shoeLength' ],
  [ 'measurements', 'gloves' ],
  [ 'measurements', 'hat' ],
])

const checkFinished = db => profile =>
  profile.finishedProfile
    ? profile
    : isComplete(profile)
    ? db.updateProfile(profile.profile, { finishedProfile: true })
    : profile

const getProfile = db => (req, res, next) => {
  db.findById(req.user.id)
    .then(data => res.json(data))
    .catch(next)
}

const update = db => (req, res, next) => {
  db.updateProfile(req.user.profile, req.body)
    .then(checkFinished(db))
    .then(data => res.json(data))
    .catch(next)
}

const whoami = (req, res) => {
  const id = req.user
    ? req.user.id
    : ''
  res.json({ id })
}

module.exports = {
  getProfile,
  update,
  whoami
}
