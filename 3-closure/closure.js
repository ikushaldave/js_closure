function nonsense(str) {
	var blab = function () {
		alert(str);
	};
	blab();
}

function nonsense(str) {
	var blab = function () {
		alert(str);
	};
	setTimeout(() => blab(), 2000);
}

function nonsense(str) {
	var blab = function () {
		alert(str);
	};
	return blab;
}

const blabLater = nonsense("Hey");
const blabAgainLater = nonsense("Hello");

function firstName(firstN) {
	return function (lastN) {
		console.log(`${firstN} ${lastN}`);
	};
}

const fullName = firstName("Kushal");
fullName("Dave");

function storyWriter() {
	let story = "";
	return {
		addWords: function (words) {
			story += ` ${words}`;
			return story.trim();
		},
		erase: function () {
			story = "";
			return story;
		},
	};
}

var farmLoveStory = storyWriter();
farmLoveStory.addWords("There was once a lonely cow."); // 'There was once a lonely cow.'
farmLoveStory.addWords("It saw a friendly face."); //'There was once a lonely cow. It saw a friendly face.'

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords("My code broke."); // 'My code broke.'
storyOfMyLife.addWords("I ate some ice cream."); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''
