const sumAll = function (a, b) {
	let total = 0;

	if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
		return 'ERROR';
	} else if (b > a) {
		for (let i = a; i >= a && i <= b; i++) {
			total += i;
		}
	} else {
		for (let i = b; i >= b && i <= a; i++) {
			total += i;
		}
	}

	return total;
};

// Do not edit below this line
module.exports = sumAll;
