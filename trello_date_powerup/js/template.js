var WHITE_ICON = './images/icon-white.svg';
var GRAY_ICON = './images/icon-gray.svg';

var getBadges = function(t){
	t.card('id', 'name', 'url', 'due').then(function(pr){console.log(pr)});
  return t.card('due')
  .get('due')
  .then(function(cardDue){
    var badgeColor;
    var icon = GRAY_ICON;

		var dueDate = new Date(Date.parse(cardDue));
		var daysLeft = Math.floor((dueDate - Date.now())/(3600*24*1000)) + 1;

		return [{
			//title: 'Detail Badge', // for detail badges only
			text: daysLeft,
			//icon: icon, // for card front badges only
			color: 'red'
		}];
  })
};

TrelloPowerUp.initialize({
  'card-badges': function(t, options){
    return getBadges(t);
  },
});
