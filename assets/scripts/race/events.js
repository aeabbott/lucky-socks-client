'use Strict'
const getFormFields = require(`../../../lib/get-form-fields`)
const raceApi = require('./api.js')

// Add a race functionality
const displayAddRaceModal = function (event) {
  console.log('display add race modal was clicked')
  event.preventDefault()
  $('#add-race-modal').modal({ show: true })
  $('#add-race').on('submit', addRace)
}

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
}

module.exports = {
  displayAddRaceModal
}
