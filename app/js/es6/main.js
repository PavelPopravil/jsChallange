function init() {

	const clubs = ['The Arsenal', 'The Chealse', 'Tothenshit', 'Manchester United', 'The Manchester City', 'A Bernly',
					'An Yotford', 'Then Liecter', 'The West Hame', 'An Everton'
	];

	function optimizeName(clubName) {
		return clubName.replace(/^(a |an |the )/i, '').trim();
	}

	const sortedClubs = clubs.sort((a,b) => optimizeName(a) > optimizeName(b) ? 1 : -1);

	const list = document.querySelector('.list');

	list.innerHTML = sortedClubs.map(club => `<li>${club}</li>`).join('');
}

window.init = init();

