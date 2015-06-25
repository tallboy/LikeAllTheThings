// ==UserScript==
// @name         LikeAllTheThings
// @namespace    http://www.tommy-ryan.com
// @version      0.1
// @description  A simple script to like all the posts your friends make
// @author       TALLBOY
// @updateURL    https://raw.githubusercontent.com/tallboy/LikeAllTheThings/master/likeAllTheThings.js
// @downloadURL  https://raw.githubusercontent.com/tallboy/LikeAllTheThings/master/likeAllTheThings.js
// @match        https://www.facebook.com/
// @grant        none
// ==/UserScript==


(function(w) {
	"use strict";

	var mainContain = document.getElementById('mainContainer');
	var offset = mainContain.offsetTop;
	
	function getLikeButtons() {
		var likes = document.querySelectorAll('.UFILikeLink');
		console.dir(likes);

		return likes;
	};
	
	function scrollToNextLike(like) {
		var likeOffset = like.offsetTop;
		mainContain.scrollTo = likeOffset;
		return true;
	};
	
	function processLikes() {
		var likes = getLikeButtons();
		for (var i=0; i < likes.length; i++) {
			//like['title'] = 'Like this'
			//like['title'] = 'Unlike this'
			if (likes[i]['title'] == 'Like this') {
				console.log('Like me!', likes[i]);
				// Throttle the clicks a bit so we don't get banned from Facebook
				setTimeout(function() {
					likes[i].click();
				}, 1000);
			};
			scrollToNextLike(likes[i]);
		};
	};

	processLikes();
	setInterval(processLikes, 5000);

}(window));

