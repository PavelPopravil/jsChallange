'use strict';

function init() {

	var clubs = ['The Arsenal', 'The Chealse', 'Tothenshit', 'Manchester United', 'The Manchester City', 'A Bernly', 'An Yotford', 'Then Liecter', 'The West Hame', 'An Everton'];

	function optimizeName(clubName) {
		return clubName.replace(/^(a |an |the )/i, '').trim();
	}

	var sortedClubs = clubs.sort(function (a, b) {
		return optimizeName(a) > optimizeName(b) ? 1 : -1;
	});

	var list = document.querySelector('.list');

	list.innerHTML = sortedClubs.map(function (club) {
		return '<li>' + club + '</li>';
	}).join('');
}

window.init = init();