var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lineUp = " ";

function stackLetters(theAlphabetArray) {
	for(var i = 0; i < alphabet.length; i++) {
		lineUp += alphabet[i];

	var remainder = (i % 3);
		if(remainder === 0){
			lineUp += " ";
		}
	console.log(lineUp);
	}
}

stackLetters(alphabet);
