// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  console.log(__dirname + '/views/index.html');
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    baseUrl: "http://arcane-woodland-15893.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Personal Data"},
      {method: "POST", path: "/api/boardgames", description: "E.g. Create a new campsite"} // CHANGE ME
    ]
  })
});

app.get('/api/profile', function api_profile(req, res){
  var profile = {
      name: 'Michael E. Rogachevsky',
      githubLink: 'https://github.com/mrogach2350',
      githubProfileImage: "https://avatars1.githubusercontent.com/u/19850983?v=3&s=460",
      personalSiteLink: "https://mrogach2350.github.io/",
      currentCity: 'San Francisco',
      pets: [{name:'Nate', type: 'Dog', breed: 'Shepard Mix', owner: 'Jim'},
      {name:'Stella', type: 'Dog', breed: 'Lab', owner: 'Rachel'},
      {name:'Putin', type: 'Dog', breed: 'Shepard/Husky Mix', owner: 'Anton'},
      {name:'Crookshanks', type: 'Cat', breed: 'Domestic Shorthair', owner: 'Andrew'}]
  }
      res.json(profile);
});

app.get('/api/boardgames', function api_boardgame(req, res){
  db.BoardGame.find({})
    .exec(function(err, boardgames){
      if (err){
        res.status(500).send(err);
        return;
      }
      res.json(boardgames);
    });
});

app.delete('/api/boardgames/:id', function(req, res){
  console.log(req.params);
  var gameId = req.params.id;

  db.BoardGame.findOneAndRemove({_id: gameId}, function (err, deletedGame){
    res.json(deletedGame);
  });
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
