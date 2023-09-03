const palindromes = function (str) {
	// let arr = str
	// 	.toLowerCase()
	// 	.split('')
	// 	.filter((e) => /^[A-Za-z0-9]*$/.test(e));

	// arr = arr.reverse();
	// const newArr = str
	// 	.toLowerCase()
	// 	.split('')
	// 	.filter((e) => /^[A-Za-z0-9]*$/.test(e));

	// let truthyArr = [];
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] !== newArr[i]) {
	// 		truthyArr.push(false);
	// 	} else if (arr[i] === newArr[i]) {
	// 		truthyArr.push(true);
	// 	}
	// }

	// if (truthyArr.indexOf(false) >= 0) {
	// 	return false;
	// } else return true;

	const arr = str
		.toLowerCase()
		.split('')
		.filter((e) => /^[A-Za-z0-9]*$/.test(e));
	const reversedArr = str
		.toLowerCase()
		.split('')
		.filter((e) => /^[A-Za-z0-9]*$/.test(e))
		.reverse();

	return arr.join() == reversedArr.join();
};

// Do not edit below this line
module.exports = palindromes;
