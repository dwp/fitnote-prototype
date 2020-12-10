const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.route('/v7a-three-options-select')
  .post((req, res, next) => {
    let redirectUrl
    switch (req.body['obtained-fit-note']) {
      case 'paper':
        redirectUrl = 'v7a-upload-paper'
        break
      case 'sms':
        redirectUrl = 'v7a-upload-sms'
        break
      case 'email':
        redirectUrl = 'v7a-upload-email'
        break
      default:
        redirectUrl = req.path
        break
    }
    res.redirect(redirectUrl)
  })

module.exports = router
