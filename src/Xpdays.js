function Xpdays() {
}

Xpdays.prototype.returnsNumber = function(){
	return 5;
}

Xpdays.prototype.callsAnotherFunction = function (callback) {
	callback();
	callback(5, true);
};

Xpdays.prototype.callsAnotherFunctionDelayed = function (callback) {
	window.setTimeout(callback, 5000);
};

Xpdays.prototype.callsAnotherFunctionWithInterval = function (callback) {
	window.setInterval(callback, 5000);
};

Xpdays.prototype.callsWindowAlert = function (window, message) {
	message += '!!!!1';
	window.alert(message);
};

Xpdays.prototype.usesMathRandom = function (number) {
	return number * Math.random();
};

function altersAndReturnsTheSameObject(object) {
	object.a = 'b';
	return object;
}

function returnsArray() {
	return [1, 2, 3, 4];
}

function returnsFunction(someParam) {
	return function () {
		return someParam * 2;
	}
}

function throwsMessage(someParam) {
	if (someParam) {
		throw('o noes!');
	}
}

function throwsError() {
	throw(new Error('kaputt'));
}