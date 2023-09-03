const fibonacci = function (num) {
	const arr = [1];
	let total = 0;

	if (num < 0) return 'OOPS';

	for (let i = 0; i <= num; i++) {
		if (i === 0) {
			arr.push(1);
		} else {
			total = arr[i] + arr[i - 1];
			arr.push(total);
		}
	}
	return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
