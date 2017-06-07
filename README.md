[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

### Lucky Socks
1. Link to app: https://aeabbott.github.io/lucky-socks-client/
2. Link to API repo: https://github.com/aeabbott/lucky-socks-api
3. Link to deployed backend: https://polar-dusk-38066.herokuapp.com/

### Project Goal

To create a virtual “medal” holder where users input information about their races.

### User stories
#### Auth:
1. As a user, I want to be able to create an account username and password- sign up.
1. As a user, I want to be able to sign into the app using the username and password I created.
1. As a user, I want to be able to change my password.
1. As a user, I want to be able to sign out.
#### Core RQs:
1. As a user, I want to be able to “create/log” a race distance and time I have ran.
  1. User enters:
    1. Race Date
    1. Race Time- Hours, Mins, Seconds
      1. If a field is left blank- default to zero
  	1.Race Distance- Drop Down box
	      1. Half
	      1. Full
	      2. 5k
	      3. 10k
	  1.Race Location
2. As a user, I want to be able to edit a race and distance and time I have ran.
	1. Editable fields are:
	        1. All fields
3. As a user, I want to be able to delete a race I have ran.
4. As a user, I want to see all the races I have ran.
	1. Default sort list by most recent race date appearing at the top
#### R2:
1. As a user, when I log in, I want to see a view of all my PRs for each distance.
1. As a user, when I create a race, I want the app to calculate and save my pace.
1. As a user, on the All Races Page, I want to be able to sort the list by:
Race Type
#### R3:
1. Photo upload for each race

## Wireframes
link: http://imgur.com/a/IcQR9

## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)
-   [Moment.js](https://momentjs.com/)

## Installation

1.  [Download](../../archive/master.zip) this template.
1.  Unzip and rename the template directory.
1.  Empty [`README.md`](README.md) and fill with your own content.
1.  Move into the new project and `git init`.
1.  Install dependencies with `npm install`.

## Structure

Dependencies are stored in [`package.json`](package.json).
