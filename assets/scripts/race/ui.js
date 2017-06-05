const showLandingPageTemplate = require('../templates/landing-page.handlebars')
const showHomePageTemplate = require('../templates/home-page.handlebars')
// function to build the landing-page
const showLandingPage = function () {
  $('.body-content').empty()
  $('.body-content').append(showLandingPageTemplate())
}

// builds the homepage
const showHomePage = function (data) {
  $('.body-content').empty()
  $('.body-content').append(showHomePageTemplate(data))
}

module.exports = {
  showLandingPage,
  showHomePage
}
