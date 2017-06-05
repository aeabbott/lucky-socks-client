// link required files
const showAllRacesTemplate = require('../templates/all-races-list.handlebars')
const raceApi = require('./api.js')

// show all the races
const displayAllRaces = function () {
  console.log('display all races function ran')
  raceApi.indexRaces()
  .then(onSuccessDisplayRaces)
  .catch(onError)
}


// show all the races success
const onSuccessDisplayRaces = function (data) {
console.log('show races was successful' + data.races)
  const showAllRaces = showAllRacesTemplate({races: data.races})
  // empty the handle bars list first
  $('.show-all-races-content').empty()
  // show the handlebars list
  $('.show-all-races-content').append(showAllRaces)
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
