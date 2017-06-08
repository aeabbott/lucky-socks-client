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
	      1. 5k
	      1. 10k
	  1.Race Location
1. As a user, I want to be able to edit a race and distance and time I have ran.
	1. Editable fields are:
	        1. All fields
1. As a user, I want to be able to delete a race I have ran.
1. As a user, I want to see all the races I have ran.
	1. Default sort list by most recent race date appearing at the top
#### R2:

1. As a user, when I create a race, I want the app to calculate and save my pace. (ACCOMPLISHED R1!)
1. As a user, I want to be able to add a Race Name for each race.
1. As a user, on the All Races Page, I want to be able to sort the list by:
  1.Race Type
  1. Race Name

#### R3:
1.1. As a user, when I log in, I want to see a view of all my PRs for each distance.
1. Photo upload for each race

### Screenshots

![alt text] (http://i.imgur.com/LMA9ppY.png)

## Wireframes
link: http://imgur.com/a/IcQR9

## Development Approach

After creating my user stories, I decided I wanted to set up the backend first and confirm
everything was working on the backend before switching over to the front end. The backend
set up went a lot smoother than project two, which I was very excited about. Once I had confirmed
everything was all set with the backend, I moved to the front end.

I really wanted to get into the meat of my app- the race list- as soon as possible, so
I pulled out all the authentication styling and functions from project two to use for the
front end authentication aspects of my app. Once that was all set, I let myself move onto the
race list display.

I'm most proud of how I present the race data to the user. As a runner, I know that I always want to know what my pace per mile was after a race, so even though I categorized race pace as a R2 story. I was able
to pull it into R1 because I had completed my R1 stories.

## Obstacles

THings were going really well by day three so I decided I wanted to tackle the PR view of the App, which is actually slated for R2. I got the functionaity to work about half way and log in the console but not
on the page. Due to time constraints, I had to abandon my PR view in order to turn in a good product.
I'm looking forward to picking that back up for R2.

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
