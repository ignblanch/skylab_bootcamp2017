function doLogout (req, res) {
  req.session = null
  res.render('logout')
}

module.exports = doLogout
