'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./race/events.js')

$(() => {
  setAPIOrigin(location, config)
  events.onShowLandingPage()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
// $(() => {
//   authEvents.addHandlers()
//   // hiding alerts on page load
//   $('.acct-success-message').hide()
//   $('.password-mismatch-message').hide()

// })
