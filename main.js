var newPlayer = function(name) {
  return { name: name, wins: 0, losses: 0 }
};

var $newPlayerRow = function(player) {
  var $name = $('<div>').addClass('name').text(player.name);
  var $wins = $('<div>').addClass('wins').text(player.wins);
  var $losses = $('<div>').addClass('losses').text(player.losses);

  return $('<div>').addClass('row').append($name).append($wins).append($losses);
};

$('.add-player-btn').on('click', function() {
  $playerNameInput = $('.player-name-input')
  $('.player-rows').append($newPlayerRow(newPlayer($playerNameInput.val())));
  $playerNameInput.val('');
});
