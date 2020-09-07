const R = require('ramda')

const isFilledPath = path => R.pipe(
  R.path(path),
  R.length,
  R.gt(R.__, 0)
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
    ? db.updateProfile(req.user.profile, { finishedProfile: true })
    : profile

const update = db => (req, res, next) => {
  db.updateProfile(req.user.profile, req.body)
    .then(checkFinished)
    .then(data => res.json(data))
    .catch(next)
}

module.exports = {
  update,
}
