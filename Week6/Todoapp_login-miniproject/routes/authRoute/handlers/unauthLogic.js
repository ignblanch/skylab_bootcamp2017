function unauthLogic (req, res) {
  if (req.session.logged) {
    res.redirect('/')
  } else {
    res.render('unauth')
  }
}

module.exports = unauthLogic
