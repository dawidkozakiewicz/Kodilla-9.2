var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Marian'

function checkName(newName) {
	if (allNames.indexOf(newName) === -1) {
		allNames.push(newName);
		console.log('Imię zostało prawidłowo dodane do tablicy');
	} else {
		console.log('Imię nie zostanie dodane - występuje już na tablicy');
	}
}

checkName(newName);

checkName('Piotrek');
