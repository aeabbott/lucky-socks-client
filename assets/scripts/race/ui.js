// link required files
const showAllRacesTemplate = require('../templates/all-races-list.handlebars')
const raceApi = require('./api.js')
const raceEvents = require('./events.js')

// show all the races
const displayAllRaces = function () {
  console.log('display all races function ran')
  raceApi.indexRaces()
  .then(onSuccessDisplayRaces)
  .catch(onError)
}


// show all the races success & add the listeners for all the other buttons
const onSuccessDisplayRaces = function (data) {
  console.log('show races was successful' + data.races)
  const showAllRaces = showAllRacesTemplate({races: data.races})
  // empty the handle bars list first
  $('.show-all-races-content').empty()
  // show the handlebars list
  $('.show-all-races-content').append(showAllRaces)
  $('.add-race-btn').on('click', raceEvents.displayAddRaceModal)

}


// filler error function
const onError = function (response) {
  console.error(response)
}

module.exports = {
  displayAllRaces,
  onSuccessDisplayRaces,
  onError

}
