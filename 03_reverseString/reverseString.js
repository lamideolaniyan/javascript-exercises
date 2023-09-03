const reverseString = function (str) {
	// const arr = str.split('');
	// const newArr = arr.map((e, i, a) => {
	// 	if (i !== Array.length - 1) {
	// 		a[a.length - i];
	// 	} else a[0];
	// });

	const newArr = [...str].map((e, i, a) => {
		if (i !== Array.length - 1) {
			a[a.length - i];
		} else a[0];
	});
	return newArr.join();
};
// Do not edit below this line
module.exports = reverseString;
