const repeatString = function (str, num) {
	let finalArr = '';
	if (num >= 0) {
		for (let i = 0; i < num; i++) {
			finalArr += str;
		}
		return finalArr;
	} else return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
