const config = require('../config')
const store = require('../store')

// show all races
const indexRaces = function () {
  return $.ajax({
    url: config.apiOrigin + '/races',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// create one race
const createRace = function (data, timeInSeconds) {
  console.log('createRace Api function was ran')
  const race = {
    race: {
      name: 'Filler Name',
      distance: data.race.distance,
      time: timeInSeconds,
      race_day: data.race.race_day,
      location: data.race.location
    }
  }
  console.log('race obj is', race)
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/races/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: race
  })
}

module.exports = {
  indexRaces,
  createRace
}
