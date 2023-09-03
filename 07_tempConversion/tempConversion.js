const convertToCelsius = function (temp) {
	const newTemp = ((temp - 32) * (5 / 9)).toFixed(1);
	return newTemp * 1;
};

const convertToFahrenheit = function (temp) {
	const newTemp = ((temp * 9) / 5 + 32).toFixed(1);
	return newTemp * 1;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
