var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var ProfileSchema = new Schema({
    name: 'Michael E. Rogachevsky',
    githubLink = 'https://github.com/mrogach2350',
    githubProfileImage = "https://avatars1.githubusercontent.com/u/19850983?v=3&s=460",
    personalSiteLink = "mrogach2350.github.io",
    currentCity = 'San Francisco',
    pets = [{name:'Nate', type: 'Dog', breed: 'Shepard Mix' owner: 'Jim'},
    {name:'Stella', type: 'Dog', breed: 'Lab' owner: 'Rachel'},
    {name:'Putin', type: 'Dog', breed: 'Shepard/Husky Mix' owner: 'Anton'},
    {name:'Crookshanks', type: 'Cat', breed: 'Domestic Shorthair' owner: 'Andrew'}]
  });

  var Profile = mongoose.model('Profile', ProfileSchema);

  module.exports = Profile;
