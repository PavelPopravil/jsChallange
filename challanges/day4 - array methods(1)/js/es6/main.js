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

	// /////////////////////////////////////////////////////////////////////////////////// vol.2
	// some()
	const somePeople = [
		{name: 'Alexey', year: 1991},
		{name: 'Pavel', year: 1992},
		{name: 'Albert', year: 1901},
		{name: 'Olya', year: 2001}
	]

	const comments = [
		{text: 'How are you', id: 80205},
		{text: 'Fck you', id: 92232},
		{text: 'D\'ont be like that', id: 20020}
	];

	const isAdult = somePeople.some(person => {
		
		const currentYear = new Date().getFullYear();
		return (currentYear - person.year >= 18);
		
	});
	console.log({isAdult});

	// every
	const allAdult = somePeople.every(person => {
		const currentYear = new Date().getFullYear();
		return (currentYear - person.year >= 18);	
	});
	console.log({allAdult});

	// find
	const comment = comments.find(comment => (comment.id === 92232));
	console.log(comment);

	// findIndex
	const index = comments.findIndex(comment => (comment.id === 92232));
	console.log(index);

	// comments.splice(index, 1);

	const newComments = [
		...comments.slice(0, index),
		...comments.slice(index + 1)
	];

	console.table(comments);
	console.table(newComments);
}

window.init = init();

