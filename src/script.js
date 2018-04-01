var demo = document.getElementById('demo');

var a = [1,2,3,4];

var obj = {
	name: 'Name',
	surname: 'Surname',
	age: 'Age'
}

Object.defineProperty(obj, 'prop', {
	configurable: true,
	enumerable: false,
	// writable: true,
	value: 'testProp'
});

console.log('>>>>>>', 'Hello world!!!', '<<<<<<');