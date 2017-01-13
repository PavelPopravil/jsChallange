function init() {
	
	const footballPlayers = [
		{firstName: 'Luis', lastName: 'Figo', startCarier: 19, age: 45, stillPlay: false, team: 'Real Madrid'},
		{firstName: 'Jack', lastName: 'Wilsere', startCarier: 19, age: 25, stillPlay: true, team: 'Arsenal'},
		{firstName: 'Theiry', lastName: 'Henry', startCarier: 19, age: 39, stillPlay: false, team: 'Arsenal'},
		{firstName: 'Alexis', lastName: 'Sanches', startCarier: 19, age: 27, stillPlay: true,team: 'Arsenal'}
	];

	const people = ['Luis, Figo', 'Peter, Cech', 'Hectior, Bellerin', 'Scodran, Mustafi', 'Loran, Koselniy', 
	'Nacho, Monreal', 'Alex, Iwobi', 'Lucas, Peres', 'Mesut, Ozil', 'Alexis, Sanches', 'Olivier, Giroud'];

	// filter() 
	const doesTheyStillPlay = footballPlayers.filter(footballPlayer => (footballPlayer.stillPlay));
	// console.table(doesTheyStillPlay);

	// map()
	const fullName = footballPlayers.map(footballPlayer => (`${footballPlayer.firstName} ${footballPlayer.lastName}`));
	// console.table(fullName);

	// sort()
	const order = footballPlayers.sort((a, b) => a.age > b.age ? 1 : -1);
	// console.table(order);

	// reduce()
	
	const totalCarier = footballPlayers.reduce((total, footballPlayer) => {
		return total + (footballPlayer.age - footballPlayer.startCarier);
	}, 0);
	// console.log(totalCarier);

	// sort()
	const mostLongCarier = footballPlayers.sort((a, b) => {

		const longestCarier = a.age - a.startCarier;
		const shortestCarier = b.age - b.startCarier;
		return longestCarier > shortestCarier ? -1 : 1;

	}); 
	// console.table(mostLongCarier);

	const alpha = people.sort((lastOne, nextOne) => {
		const [aLast, aFirst] = lastOne.split(', ');
		const [bLast, bFirst] = nextOne.split(', ');

		return aFirst > bFirst ? 1 : -1;
	});
	console.table(alpha);

	// reduce()
	const data = ['car', 'truck', 'car', 'truck', 'bike', 'motocicle', 'motocicle'];

	const transport = data.reduce((obj, item) => {	

		if (!obj[item]) {
			obj[item] = 0;
		}
		obj[item]++;
		return obj;
	}, {});

	console.log(transport);
}

window.init = init();