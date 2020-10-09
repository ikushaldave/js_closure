// Challenge 1
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
	return word + "s";
}

// uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3
function map(array, callback) {
	const resulted = [];
	for (let i = 0; i < array.length; i++) {
		resulted.push(callback(array[i], i, array));
	}
	return resulted;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
		callback(array[i], i, array);
	}
}
// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
	const resulted = [];
	forEach(array, (e, i, a) => resulted.push(callback(e, i, a)));
	return resulted;
}

console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
function reduce(array, callback, initialValue) {
	let result = initialValue;
	forEach(array, (e) => {
		result = callback(result, e);
	});
	return result;
}

//Extension 3
function intersection(...arrays) {
	return reduce(
		arrays[0],
		(acc, c) => {
			const avabilityArr = [];
			forEach(arrays, (e) => {
				if (e.includes(c)) {
					avabilityArr.push(true);
				} else {
					avabilityArr.push(false);
				}
			});
			if (avabilityArr.every((test) => test == true)) {
				acc.push(c);
			}
			return acc;
		},
		[]
	);
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
	return reduce(
		arrays,
		(acc, c) => {
			reduce(
				c,
				(a, b) => {
					if (!a.includes(b)) {
						a.push(b);
					}
					return a;
				},
				acc
			);
			return acc;
		},
		[]
	);
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
	const obj = {};
	forEach(array1, (e) => {
		if (array2.includes(callback(e))) {
			obj[e] = callback(e);
		}
	});
	return obj;
}

console.log(
	objOfMatches(["hi", "howdy", "bye", "later", "hello"], ["HI", "Howdy", "BYE", "LATER", "hello"], function (str) {
		return str.toUpperCase();
	})
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
	const obj = {};
	forEach(arrVals, (e) => {
		obj[e] = mapWith(arrCallbacks, (fn) => fn(e));
	});
	return obj;
}

console.log(
	multiMap(
		["catfood", "glue", "beer"],
		[
			function (str) {
				return str.toUpperCase();
			},
			function (str) {
				return str[0].toUpperCase() + str.slice(1).toLowerCase();
			},
			function (str) {
				return str + str;
			},
		]
	)
);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
