'use Strict'
const getFormFields = require(`../../../lib/get-form-fields`)
const raceApi = require('./api.js')
const showAllRacesTemplate = require('../templates/all-races-list.handlebars')

// SHOW RACE FUNCTIONALITY
// show all the races
const displayAllRaces = function () {
  console.log('display all races function ran')
  raceApi.indexRaces()
  .then(onSuccessDisplayRaces)
  .catch(onError)
  // listener for add race button


}

// show all the races success & add the listeners for all the other buttons
const onSuccessDisplayRaces = function (data) {
  console.log('show races was successful' + data.races)
  // render the handlebars template
  const showAllRaces = showAllRacesTemplate({races: data.races})
  // empty the handle bars list first
  $('.show-all-races-content').empty()
  // show the handlebars list
  $('.show-all-races-content').append(showAllRaces)
  // add the listener for the modal
  $('.add-race-btn').on('click', displayAddRaceModal)
}

// ADD RACE FUNCTIONALITY
// SHOW ADD RACE MODAL
const displayAddRaceModal = function (event) {
  console.log('display add race modal was clicked')
  event.preventDefault()
  $('#add-race-modal').modal({ show: true })
  $('#add-race').on('submit', addRace)
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
}

// standard error function
const onError = function (response) {
  console.error(response)
}
module.exports = {
  displayAllRaces,
  displayAddRaceModal
}
