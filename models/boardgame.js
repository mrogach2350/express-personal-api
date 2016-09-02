var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BoardGameSchema = new Schema({
  name: String,
  minPlayers = Number,
  maxPlayers = Number,
  timeToPlay = Number,
  singlePlayerOption = Boolean,
  releaseYear = Number,
  gameType = String
});

var BoardGame = mongoose.model('BoardGame', BoardGameSchema);

module.exports = Profile;
