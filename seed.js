// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');
//
// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}
//
// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }
//
//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var db = require('./models');

var boardgames_list = [
  {
  name: 'Power Grid',
  minPlayers: 2,
  maxPlayers: 6,
  timeToPlay: 120,
  singlePlayerOption: false,
  releaseYear: 2004,
  gameType: 'Strategy'
  },
  {
  name: 'Puerto Rico',
  minPlayers: 2,
  maxPlayers: 5,
  timeToPlay: 150,
  singlePlayerOption: false,
  releaseYear: 2002,
  gameType: 'Strategy'
  },
  {
  name: 'Cranium',
  minPlayers: 4,
  maxPlayers: 16,
  timeToPlay: 60,
  singlePlayerOption: false,
  releaseYear: 1998,
  gameType: 'Party'
  },
  {
  name: 'Scoville',
  minPlayers: 2,
  maxPlayers: 6,
  timeToPlay: 90,
  singlePlayerOption: false,
  releaseYear: 2014,
  gameType: 'Strategy'
  },
  {
  name: 'Agricola',
  minPlayers: 1,
  maxPlayers: 5,
  timeToPlay: 150,
  singlePlayerOption: true,
  releaseYear: 2007,
  gameType: 'Strategy'
  },
  {
  name: 'Betrayal at House on the Hill',
  minPlayers: 3,
  maxPlayers: 6,
  timeToPlay: 60,
  singlePlayerOption: false,
  releaseYear: 2004,
  gameType: 'Thematic'
  },
]

db.BoardGame.remove({}, function(err, boardgames){

  db.BoardGame.create(boardgames_list, function(err, boardgames){
      if(err){return console.log(err);}
        console.log("created", boardgames.length, 'boardgames');
        process.exit();
  });

});
