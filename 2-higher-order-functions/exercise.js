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
	for (let index = 0; index < array.length; index++) {
		resulted.push(callback(array[index], index, array));
	}
	return resulted;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
	for (let index = 0; index < array.length; index++) {
		callback(array[index], index, array);
	}
}
// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
	const resulted = [];
	forEach(array, (element, index, arr) => resulted.push(callback(element, index, arr)));
	return resulted;
}

console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
function reduce(array, callback, initialValue) {
	let acc = initialValue ?? array[0];
	forEach(array, (cv) => {
		acc = callback(acc, cv);
	});
	return acc;
}

//Extension 3
function intersection(...arrays) {
	return reduce(arrays, (acc, cv) => {
		acc = cv.filter((element) => acc.includes(element));
		return acc;
	});
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
	return reduce(arrays, (acc, cv) => {
		return acc.concat(...cv.filter((element) => !acc.includes(element)));
	});
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
	const obj = {};
	forEach(array1, (element, index) => {
		if (element.toUpperCase() == array2[index]) {
			obj[element] = callback(element);
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
	forEach(arrVals, (element) => {
		obj[element] = mapWith(arrCallbacks, (fn) => fn(element));
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
