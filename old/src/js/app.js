var $ = require('jquery');

require('../css/style.css');

(function() {
	var $firstButton = $('#firstButton');

	$firstButton.click(() => {
		console.log('Add Button');
	});
})();
