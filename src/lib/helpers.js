const shuffle = xs => {
  const a = Array.from(xs)
  for (let i = 0; i < a.length - 1; i++) {
    const newIdx = Math.floor(Math.random() * (i + 1));
    [a[i], a[newIdx]] = [a[newIdx], a[i]]
  }
  return a
}

module.exports = {
  shuffle
}
