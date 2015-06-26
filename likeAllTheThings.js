// ==UserScript==
// @name         LikeAllTheThings
// @namespace    http://www.tommy-ryan.com
// @version      0.2
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
	var version = 0.2;
	var clickRate = 100;
	var intervalRate = 6000;	
	

		// Let's try just going to the bottom of the page after processing Likes
	function scrollToBottomOfPage() {
		window.scrollTo(0,document.body.scrollHeight);
	}

	function likeLike(like) {
		like.click();
	}

	function getUnlikedLikeLinks() {
		var likes = document.querySelectorAll('.UFILikeLink');
		var likesArr = [];
		for (var i=0; i < likes.length; i++) { 
			if (likes[i]['title'] == 'Like this') {
				likeLike(likes[i]);
			}
		}

		return likesArr;
	}
	
	
	function processLikes() {
		var likes = getUnlikedLikeLinks();
		console.dir('LIKES TO PROCESS', likes);
		scrollToBottomOfPage();
	}

	// INIT & EVENT HANDLERS
	function initLiker() {
		var likerContainer = document.createElement('div');
		var mainContainer = document.getElementById('blueBarNAXAnchor');
		var child = mainContainer.firstChild;
		mainContainer.insertBefore(likerContainer, child);
		likerContainer.className = 'likerUI';
		likerContainer.innerHTML = '<a href="#" class="startLiker" style="position:fixed;left:10px;width:140px;height:20px;padding:5px;background:#f0f0f0;border:1px solid #dadada;border-radius:6px;text-align:center;">START LIKER</a>';

		var likerUI = document.querySelector('.likerUI');
		likerUI.addEventListener('click', function(e) {
			//@TODO: Add toggle state
			console.log('LIKER CLICKED, LikeAllTheThings v.' + version);
			startLiker();
		});

	}

	function startLiker() {
		setInterval(processLikes, intervalRate);	
	}

	initLiker();

}(window));

