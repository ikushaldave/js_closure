// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

arrays.reduce((a, c) => {
	a.concat(c);
	return a;
}, []);

// Your code here.
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.

function loop(value, test, update, body) {
	while (test(value)) {
		body(value);
		value = update(value);
	}
}

loop(
	3,
	(n) => n > 0,
	(n) => n - 1,
	console.log
);
// → 3
// → 2
// → 1

// Challenge 3. Everything

// using some

function every(array, test) {
	return array.reduce((a, c) => a && [c].some((e) => test(e)), true);
}

// using loop

function every2(array, test) {
	let output = true;
	for (let num of array) {
		output = output && test(num);
	}
	return output;
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true

// Challenge 4. Dominant writing direction

function characterScript(code) {
	return filter(SCRIPTS, (a) => a.ranges.some((e) => e[0] <= code && e[1] >= code));
}

function filter(arr, cb) {
	const filteredArr = [];
	for (let val of arr) {
		// console.log(cb(val));
		if (cb(val)) {
			// console.log(val);
			filteredArr.push(val);
		}
	}
	return filteredArr;
}

function dominantDirection(text) {
	// Your code here.
	let scriptCode = null;
	let filteredScript = [];
	let ltr = 0;
	let rtl = 0;
	let ttb = 0;
	scriptCode = text.split("").map((e) => e.codePointAt(0));
	scriptCode.forEach((e) => filteredScript.push(characterScript(e)));
	filteredScript.flat().forEach((e) => {
		if (e.direction == "ltr") {
			ltr++;
		} else if (e.direction == "rtl") {
			rtl++;
		} else {
			ttb++;
		}
	});
	console.log(ltr, rtl, ttb);
	return ltr > rtl && ltr > ttb ? "ltr" : rtl > ltr && rtl > ttb ? "rtl" : "ttb";
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
