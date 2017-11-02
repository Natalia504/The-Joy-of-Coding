require('dotenv').config();

const app = requrie('express')(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  session = require('sessions'),
  passport = require('passport'),
  Auth0Strategy = require('passport-auth0'),
  massive = require('massive'),
  port = 3030;

app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

const strategy = new Auth0Strategy({
  domain: process.env.DOMAIN,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
},
((accessToken, refreshToken, extraParams, profile, done) =>
  // accessToken is the token to call Auth0 API (not needed in the most cases)
  // extraParams.id_token has the JSON Web Token
  // profile has all the information from the user
  done(null, profile)
)
);

passport.use(strategy);


app.listen(port, () => {
  console.log(`Ship docked at port: ${port}`);
});


app.use(passport.initialize());
app.use(passport.session());
