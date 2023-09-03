const findTheOldest = function (arr) {
	const currentDate = new Date();
	arr.sort((a, b) => {
		if (!a.yearOfDeath) {
			return (
				currentDate.getFullYear() -
				a.yearOfBirth -
				(b.yearOfDeath - b.yearOfBirth)
			);
		} else if (!b.yearOfDeath) {
			return (
				a.yearOfDeath -
				a.yearOfBirth -
				(currentDate.getFullYear() - b.yearOfBirth)
			);
		}
		return a.yearOfDeath - a.yearOfBirth - (b.yearOfDeath - b.yearOfBirth);
	});
	return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
