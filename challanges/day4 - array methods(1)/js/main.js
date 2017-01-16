'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function init() {

	var footballPlayers = [{ firstName: 'Luis', lastName: 'Figo', startCarier: 19, age: 45, stillPlay: false, team: 'Real Madrid' }, { firstName: 'Jack', lastName: 'Wilsere', startCarier: 19, age: 25, stillPlay: true, team: 'Arsenal' }, { firstName: 'Theiry', lastName: 'Henry', startCarier: 19, age: 39, stillPlay: false, team: 'Arsenal' }, { firstName: 'Alexis', lastName: 'Sanches', startCarier: 19, age: 27, stillPlay: true, team: 'Arsenal' }];

	var people = ['Luis, Figo', 'Peter, Cech', 'Hectior, Bellerin', 'Scodran, Mustafi', 'Loran, Koselniy', 'Nacho, Monreal', 'Alex, Iwobi', 'Lucas, Peres', 'Mesut, Ozil', 'Alexis, Sanches', 'Olivier, Giroud'];

	// filter() 
	var doesTheyStillPlay = footballPlayers.filter(function (footballPlayer) {
		return footballPlayer.stillPlay;
	});
	// console.table(doesTheyStillPlay);

	// map()
	var fullName = footballPlayers.map(function (footballPlayer) {
		return footballPlayer.firstName + ' ' + footballPlayer.lastName;
	});
	// console.table(fullName);

	// sort()
	var order = footballPlayers.sort(function (a, b) {
		return a.age > b.age ? 1 : -1;
	});
	// console.table(order);

	// reduce()

	var totalCarier = footballPlayers.reduce(function (total, footballPlayer) {
		return total + (footballPlayer.age - footballPlayer.startCarier);
	}, 0);
	// console.log(totalCarier);

	// sort()
	var mostLongCarier = footballPlayers.sort(function (a, b) {

		var longestCarier = a.age - a.startCarier;
		var shortestCarier = b.age - b.startCarier;
		return longestCarier > shortestCarier ? -1 : 1;
	});
	// console.table(mostLongCarier);

	var alpha = people.sort(function (lastOne, nextOne) {
		var _lastOne$split = lastOne.split(', '),
		    _lastOne$split2 = _slicedToArray(_lastOne$split, 2),
		    aLast = _lastOne$split2[0],
		    aFirst = _lastOne$split2[1];

		var _nextOne$split = nextOne.split(', '),
		    _nextOne$split2 = _slicedToArray(_nextOne$split, 2),
		    bLast = _nextOne$split2[0],
		    bFirst = _nextOne$split2[1];

		return aFirst > bFirst ? 1 : -1;
	});
	console.table(alpha);

	// reduce()
	var data = ['car', 'truck', 'car', 'truck', 'bike', 'motocicle', 'motocicle'];

	var transport = data.reduce(function (obj, item) {

		if (!obj[item]) {
			obj[item] = 0;
		}
		obj[item]++;
		return obj;
	}, {});

	console.log(transport);

	// /////////////////////////////////////////////////////////////////////////////////// vol.2
	// some()
	var somePeople = [{ name: 'Alexey', year: 1991 }, { name: 'Pavel', year: 1992 }, { name: 'Albert', year: 1901 }, { name: 'Olya', year: 2001 }];

	var comments = [{ text: 'How are you', id: 80205 }, { text: 'Fck you', id: 92232 }, { text: 'D\'ont be like that', id: 20020 }];

	var isAdult = somePeople.some(function (person) {

		var currentYear = new Date().getFullYear();
		return currentYear - person.year >= 18;
	});
	console.log({ isAdult: isAdult });

	// every
	var allAdult = somePeople.every(function (person) {
		var currentYear = new Date().getFullYear();
		return currentYear - person.year >= 18;
	});
	console.log({ allAdult: allAdult });

	// find
	var comment = comments.find(function (comment) {
		return comment.id === 92232;
	});
	console.log(comment);

	// findIndex
	var index = comments.findIndex(function (comment) {
		return comment.id === 92232;
	});
	console.log(index);

	// comments.splice(index, 1);

	var newComments = [].concat(_toConsumableArray(comments.slice(0, index)), _toConsumableArray(comments.slice(index + 1)));

	console.table(comments);
	console.table(newComments);
}

window.init = init();