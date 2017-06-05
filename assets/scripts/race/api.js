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


module.exports = {
  indexRaces
}
