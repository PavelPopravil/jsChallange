'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function init() {

	var endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

	var cities = [];

	fetch(endpoint).then(function (blob) {
		return blob.json();
	}).then(function (data) {
		return cities.push.apply(cities, _toConsumableArray(data));
	});

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	function findMatches(wordToMatch, cities) {
		return cities.filter(function (place) {

			var regex = new RegExp(wordToMatch, 'gi');
			return place.city.match(regex) || place.state.match(regex);
		});
	}

	function displayMatches() {
		var _this = this;

		var matchesArray = findMatches(this.value, cities);
		var html = matchesArray.map(function (place) {

			var regex = new RegExp(_this.value, 'gi');
			var cityName = place.city.replace(regex, '<span class="hl">' + _this.value + '</span>');
			var stateName = place.state.replace(regex, '<span class="hl">' + _this.value + '</span>');
			return '\n\t\t\t\t<li class="output__item">\n\t\t\t\t\t<span class="city">' + cityName + ',</span> <span class="state">' + stateName + '</span>\n\t\t\t\t\t<span class="population">' + numberWithCommas(place.population) + '</span>\n\t\t\t\t</li>\n\t\t\t';
		}).join('');
		output.innerHTML = html;
	}

	var searchInput = document.querySelector('.search');
	var output = document.querySelector('.output');

	searchInput.addEventListener('change', displayMatches);
	searchInput.addEventListener('keyup', displayMatches);
}

window.init = init();