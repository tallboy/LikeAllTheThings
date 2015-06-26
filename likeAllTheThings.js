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

	// OPTIONS
	var clickRate = 1000;
	var intervalRate = 5000;	

	var mainContain = document.getElementById('mainContainer');
	var offset = mainContain.offsetTop;
	
	function getUnlikedLikeLinks() {
		var likes = document.querySelectorAll('.UFILikeLink');
		var likesArr = [];
		for (var i=0; i < likes.length; i++) { 
			if (likes[i]['title'] == 'Like this') {
				likesArr.push(likes[i]);
			}
		}
		console.dir(likesArr);

		return likesArr;
	};
	
	function scrollToNextLike(like) {
		var likeOffset = like.offsetTop;
		mainContain.scrollTo = likeOffset;
		return true;
	};

	// Let's try just going to the bottom of the page after processing Likes
	function scrollToBottomOfPage() {
		window.scrollTo(0,document.body.scrollHeight);
	};
	
	function processLikes() {
		var likes = getUnlikedLikeLinks();
		for (var i=0; i < likes.length; i++) {
			console.log('Like me!', likes[i]);
			// Throttle the clicks a bit so we don't get banned from Facebook
			// setTimeout(function() {
			// 	likes[i].click();
			// }, clickRate);
		};
		scrollToBottomOfPage();
	};

	// INIT & EVENT HANDLERS
	function initLiker() {
		var likerContainer = document.createElement('div');
		var mainContainer = document.getElementById('mainContainer');
		document.insertBefore(likerContainer, mainContainer);
		likerContainer.className = 'likerUI';
		likerContainer.innerHTML = '<a href="#" class="startLiker">START LIKER</a>';

		var likerUI = document.querySelector('.likerUI');

	}

	function startLiker() {
		setInterval(processLikes, intervalRate);	
	}

	

}(window));

