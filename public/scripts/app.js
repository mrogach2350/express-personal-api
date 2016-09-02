console.log("Sanity Check: JS is working!");
var template;
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
