'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
}

window.init = init();