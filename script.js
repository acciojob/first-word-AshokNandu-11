function firstWord(str) {
  // your code here
	let trimStr = str.trim();
  // Split the string into an array of words based on space character
	let words = str.split(" "); // ["see", "and", "stop"]
  // Return the first word (first element of the array)
	return words[0];
}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
