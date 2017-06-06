'use Strict'
const getFormFields = require(`../../../lib/get-form-fields`)
const raceApi = require('./api.js')
const raceUi = require('./ui.js')
const authApi = require('../auth/api.js')
const authUi = require('../auth/ui.js')
const moment = require('moment')

// DISPLAY SIGN UP AND SIGN IN PAGE
const onShowLandingPage = function () {
  console.log('On show landing page ran')
  raceUi.showLandingPage()
  addLandingPageHandlers()
}

// sign up and sign in listeners
const addLandingPageHandlers = function () {
  // hide success and fail messages on page load
  $('.password-mismatch-message').hide()
  $('.acct-success-message').hide()
  $('.navbar').hide()
  // submit form to backend
  $('#register-form').on('submit', onSignUp)
  $('#login-form').on('submit', onSignIn)
  // switch between sign in form and login form
  $('#register-form-link').on('click', showSignUpForm)
  $('#login-form-link').on('click', showLogInForm)
  // hide alerts and other items

}

const onSignUp = function (event) {
  console.log('sign up ran')
  // this is pointing to the event.target
  const data = getFormFields(this)
  event.preventDefault()
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFailure)
}

const showSignUpForm = function (event) {
  event.preventDefault()
 // switch to show the sign up form content when header tab is clicked
  console.log('Sign up tab header was clicked')
  $('#login-form').hide()
  $('#register-form').show()
  $('#login-form-link').removeClass('active')
  $(this).addClass('active')
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran')
  const data = getFormFields(this)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    // if user is successful render the home page
    .then(displayAllRaces)
    .catch(authUi.signInFailure)
}

const showLogInForm = function (event) {
  event.preventDefault()
  // switch to show the log in form content when header tab is clicked
  // console.log('Log in tab header was clicked')
  $('#login-form').show()
  $('#register-form').hide()
  $('#register-form-link').removeClass('active')
  $(this).addClass('active')
}

// NAVBAR FUNCTIONS-SIGN OUT & CHANGE PASS
const onSignOut = function (event) {
  event.preventDefault()
  // console.log('sign out ran')
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .then(onShowLandingPage)
    .catch(authUi.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password event just ran')
  $('.old-password-mismatch-message').hide()
  let data = getFormFields(this)
  /** const password = data.passwords
  console.log(password)**/
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
}

const displayChangePassModal = function (event) {
  event.preventDefault()
  console.log('change password button was clicked')
  $('.pass-success-message').hide()
  $('.old-password-mismatch-message').hide()
  $('#password-modal').modal({show: true})
}

const onClosePassModal = function (event) {
  event.preventDefault()
  $('.pass-success-message').hide()
  $('.old-password-mismatch-message').hide()
  $('#change-password')[0].reset()
}

// RENDER HOME PAGE - RACE LIST VIEW
const onShowHomePage = function (data) {
  console.log('onShowHomePage ran from events file')
  raceUi.showHomePage(data)
  addHomePageHandlers()
}

// add the homepage listeners
const addHomePageHandlers = function () {
  // show nav bar on landing page
  $('.navbar').show()
  // Password modal handlers
  $('.change-pass-btn').on('click', displayChangePassModal)
  $('.cls-pass-modal').on('click', onClosePassModal)
  // Password and form submit handlers
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  // Add race handler listeners
  $('.add-race-btn').on('click', displayAddRaceModal)
  $('.update-button').on('click', displayUpdateModal)
  $('.delete-button').on('click', onDeleteRace)
  // Form submit handlers
  $('#update-race').on('submit', onUpdateRace)
  $('#add-race').on('submit', addRace)

}


// SHOW RACE FUNCTIONALITY
const displayAllRaces = function () {
  console.log('display all races function ran')
  raceApi.indexRaces()
    .then((data) => {
      data.races = data.races.map(race => {
        race.race_day = moment(race.race_day).format('MMM Do YYYY')
        race.time = moment.utc(race.time * 1000).format('HH:mm:ss')
        if (race.distance === 13.1) {
          race.distance = 'Half Marathon'
        } else if (race.distance === 26.2) {
          race.distance = 'Marathon'
        } else if (race.distance === 3.1) {
          race.distance = '5k'
        } else {
          race.distance = '10k'
        }
        return race
      })
      onShowHomePage(data)
    })
      .catch(onError)
}

// ADD RACE FUNCTIONALITY
// SHOW ADD RACE MODAL
const displayAddRaceModal = function (event) {
  console.log('display add race modal was clicked')
  event.preventDefault()
  $('#add-race-modal').modal({ show: true })
}

// CREATE RACE FUNCTION
const addRace = function (event) {
  console.log('add race button was clicked inside add race modal')
  event.preventDefault()
  const data = getFormFields(event.target)
  // convert user input into seconds to send to API
  const hours = (($('#hours').val()) * 60) * 60
  const mins = ($('#minutes').val()) * 60
  const seconds = ($('#seconds').val()) * 1
  const timeInSeconds = hours + mins + seconds
  console.log('hours are', hours, 'seconds')
  console.log('mins are', mins, 'seconds')
  console.log('seconds are', seconds, 'seconds')
  console.log('total seconds are', timeInSeconds)
  console.log('data is', data)
  // send data over to create a race
  raceApi.createRace(data, timeInSeconds)
  .then(createRaceSuccess)
  .catch(onError)
}

// SUCCESS FUNCTION
const createRaceSuccess = function () {
  console.log('create Race Success ran')
  $('#add-race')[0].reset()
  displayAllRaces()
}

// delete race function
const onDeleteRace = function () {
  console.log('on delete race ran', this)
  const id = $(this).attr('data-id')
  raceApi.destroyRace(id)
  .then(displayAllRaces)
  .catch(onError)
}

// show one race function when update button is pressed
const displayUpdateModal = function () {
  console.log('display update modal was clicked')
  event.preventDefault()
  const id = $(this).attr('data-id')
  raceApi.showRace(id)
  .then(prefilleRaceFields)
  .then(showUpdateModal)
  .catch(onError)
}

// push the fields from the show to the update
const prefilleRaceFields = function (data) {
  $('#update-race').attr('data-id', data.race.id)
  $('#race-day').val(data.race.race_day)
  $('#race-location').val(data.race.location)
// prefill dropdown boxes
  if (data.race.distance === 13.1) {
    $("select").val("13.1")
  } else if (data.race.distance === 26.2) {
    $("select").val("26.2")
  } else if (data.race.distance === 3.1) {
    $("select").val("3.1")
  } else {
    $("select").val("6.2")
  }
// code to prefill time goes here
  const hours = moment.utc(data.race.time * 1000).format('HH')
  const minutes = moment.utc(data.race.time * 1000).format('HH:mm').slice(3, 5)
  const seconds = moment.utc(data.race.time * 1000).format('HH:mm:ss').slice(6, 8)
  $('#update-hours').val(hours)
  $('#update-minutes').val(minutes)
  $('#update-seconds').val(seconds)


  console.log(hours)
  console.log(minutes)
  console.log(seconds)
}

const showUpdateModal = function () {
  $('#update-race-modal').modal({ show: true })
}

const onUpdateRace = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(this).attr('data-id')
  console.log(this)
  console.log('updateRace ran', id, data)
  raceApi.patchRace(id, data)
    .then(displayAllRaces)
    .catch(onError)
}

// standard error function
const onError = function (response) {
  console.error(response)
}
module.exports = {
  onShowLandingPage,
  onShowHomePage,
  displayAllRaces,
  displayAddRaceModal
}
