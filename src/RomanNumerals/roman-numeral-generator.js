var Generator = function() {
	'use strict';

	var numeralLookup = {
		1: 'I',
		4: 'IV',
		5: 'V',
		9: 'IX',
		10: 'X'
	};

	function getNumeral(number) {
		if (numeralLookup[number])
			return numeralLookup[number];

	  return getNumeral(number-1) + numeralLookup[1];
	};

	return {
		getNumeral: getNumeral
	}

}

module.exports = Generator;