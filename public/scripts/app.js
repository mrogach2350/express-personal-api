console.log("Sanity Check: JS is working!");
var template;
var gameTemplate;
var $profile;
var $gamesList;
var profile;
var allGames = [];
$(document).ready(function(){

  $profile = $('#profileTarget');

  var source = $('#profile-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/profile',
    success: profileHandleSuccess,
    error: profileHandleError
  });

  $gamesList = $('#boardGameTarget');

  var sourceGames = $('#boardGame-template').html();
  gameTemplate = Handlebars.compile(sourceGames);

  $.ajax({
    method: 'GET',
    url: '/api/boardgames',
    success: bgHandleSuccess,
    error: bgHandleError
  });

  $gamesList.on('click', '.deleteBtn', function(){
    $.ajax({
      method: 'DELETE',
      url: '/api/boardgames/' +$(this).attr('data-id'),
      success: deleteGameSuccess,
      error: deleteGameError
    });
  });


});
function renderProfile (){
  $profile.empty();
  var profileHtml = template({profile: profile});
  $profile.append(profileHtml);
}

function profileHandleSuccess(json){
  profile = json;
  renderProfile();
}

function profileHandleError(e){
  console.log('uh oh');
  $('#profileTarget').text('Failed to load profile data.');
}

function renderBoardGame(){
  $gamesList.empty();
  var gamesHtml = gameTemplate({boardgames: allGames});
  $gamesList.append(gamesHtml);
}

function bgHandleSuccess(json){
  allGames = json;
  renderBoardGame();
}

function bgHandleError(e){
  console.log('uh oh');
  $('#boardGameTarget').text('Failed to load game data.');
}

function deleteGameSuccess(json){
  var game = json;
  var gameId = game._id;

  for(var index = 0; index < allGames.length; index ++){
    console.log(allGames);
    if(allGames[index]._id === gameId) {
      console.log(allGames[index]);
      allGames.splice(index, 1);
      console.log(allGames);
      break;
    }
  }
  renderBoardGame();
}

function deleteGameError() {
  // console.log(e);
}
