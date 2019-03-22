LAB 12
==============================================

Learning how to use Oauth and connecting frontend to backend.

## LAB 12
[![Build Status](https://travis-ci.org/consihon/oauth-backend.svg?branch=master)](https://travis-ci.org/consihon/oauth-backend)


### Author: Erik M Johnson

### Links and Resources
* [BackEnd - Repo](https://github.com/consihon/oauth-backend)
* [BackEnd - Travis](https://travis-ci.org/consihon/oauth-backend)
* [BackEnd - Heroku](https://dashboard.heroku.com/apps/sihonoauth)
* [FrontEnd - Repo](https://github.com/erikmjohnson/oauth-frontend)
* [FrontEnd - Heroku](https://dashboard.heroku.com/apps/lab12-oauth-frontend)

### BackEnd - Modules
#### app.js

* server -> has all server paths
* start -> starts server
___
#### router.js

* `post('/signup')` -> creates new user for mongoose
* `post('/signin')` -> signs into user
* `get('/oauth')` -> requests token and then sends it to provider

___
#### discord.js
* authorize -> creates new user token

#### Tests

* To run tests, use `npm test` command.

#### Special Needs

This assignment is console.log based. Must get authorization to view heroku console log messages.
