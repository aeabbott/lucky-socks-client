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

// show one race
const showRace = function (id) {
  console.log('race id is', id)
  return $.ajax({
    url: config.apiOrigin + '/races/' + id,
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

// update a race
const patchRace = function (id, data, timeInSeconds) {
  const race = {
    race: {
      distance: data.race.distance,
      time: timeInSeconds,
      race_day: data.race.race_day,
      location: data.race.location
    }
  }
  return $.ajax({
    url: config.apiOrigin + '/races/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: race
  })
}

// delete race
const destroyRace = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/races/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexRaces,
  showRace,
  createRace,
  patchRace,
  destroyRace

}
