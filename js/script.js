/*
console.log('dubugging');

var sauceFlag = 1;

while (sauceFlag === 1) {

	sauceFlag = prompt('Do you need sauce? Please enter yes or no');

	if(sauceFlag === 'yes'){
		var countSauce = parseInt(prompt('how many sauce? Please enter a number'));

		if (countSauce > 10){
			sauceFlag = 1;
			alert('Oh! too many!');
			// continue with the loop from this point onwards
			continue;
			// 'break' is another keyword that can be used which will break the loop from this point
		}
		else if (sauceFlag === 0){
			sauceFlag = 0;
		}

		sauceFlag = 0;
		document.getElementById('result').textContent = 'you asked for ' + countSauce + ' sauces';
	}
}
*/

console.log('dubugging');

var sauceFlag = 1;

while (sauceFlag === 1) {

	sauceFlag = prompt('Do you need sauce? Please enter yes or no');

	if(sauceFlag === 'yes'){
		var countSauce = parseInt(prompt('how many sauce? Please enter a number'));

		if (countSauce > 10){
			sauceFlag = 1;
			alert('Oh! too many!');
			// continue with the loop from this point onwards
			continue;
			// 'break' is another keyword that can be used which will break the loop from this point
		}
		else if (sauceFlag === 0){
			sauceFlag = 0;
		}

		sauceFlag = 0;
		document.getElementById('result').textContent = 'you asked for ' + countSauce + ' sauces';
	}
	else {
		document.getElementById('result').textContent = 'Don\'t waste my time';
	}
}

for (var i = 0; i <= 100; i += 7) {
	document.getElementById('countingInSevens').innerHTML += i + '</br>';
}

// breaks code at the moment
// for (var j = 0; j <=20000000; j *= 2) {
// 	document.getElementById('countingInTwos').innerHTML += j + ' ';
// }














