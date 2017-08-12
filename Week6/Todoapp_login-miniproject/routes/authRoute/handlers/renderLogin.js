function showLogin (req, res) {
  if (req.session.logged) {
    res.redirect('/')
  } else {
    res.render('login')
  }
}

module.exports = showLogin
