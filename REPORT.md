# OAuth Comparative Analysis

## Discord Oauth

### Research Conducted by: 
* Rick Bellamy
* Erik Johnson 
* Conner Sihon

#### General Comments

Discord is a text chat for gamers that is free, secure and works on multiple devices. The overall
review of this provider was easy to learn how to verify a token. It does require a full stack.

##### Pros
* Provides documentation on bot related authentication
* Simple documentation
* creates redirect path for you

##### Cons
* Only shows python instructions
* scroll gets in the way of some documentation

#### Ratings and Review

##### Documentation
Overall, we liked discord because it was simple to understand even though the documentation was
only in python. It was slightly annoying the scroll bar was in the way for one line of code.

##### Systems Requirements
* No specific Database needed
* Works on Heroku
* Dependencies
  * express
  * cors
  * jsonwebtoken

#### Ramp-Up Project
I feel that mid level junior developers could implement this Oauth2 in a couple of hours based on us figuring
it out in 10 hours.

#### Community Support and Adoption Levels
This seems to not have a huge support from the community. There is a lack of articles on discord help.
As far as how it's seen by the community, it's not mentioned very much like Facebook or Google.

#### Links and Resources
[Facbook Oauth](https://developers.facebook.com/docs/facebook-login/auth-vs-data)<br>
[GitHub Oauth](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)<br>
[Discord Oauth](https://discordapp.com/developers/docs/topics/oauth2) 

#### Code Repository
[Front End](https://github.com/erikmjohnson/oauth-frontend)<br>
[Back End](https://github.com/erikmjohnson/oauth-backend)

#### Operating Instructions

* Download both repository Oauth-Frontend and Oauth-backend
* Oauth-Frontend -> `npm run start`
* Oauth-Backend -> `npm run start` & `npm run dbOn`
* Endpoint: `/signin` -> sign into user, returns multiple console.log messages
* Endpoint: `/signup` -> creates new user
* Endpoint: `/oauth` -> sends token to Oauth provider
