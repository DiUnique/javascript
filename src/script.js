var demo = document.getElementById('demo');

var a = [1,2,3,4];

a.prop = '123';
console.log(a);

a.push(5);
a.push(6);
console.log(a);

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

demo.addEventListener('click', function() {
	alert('Clicked...');
});

console.log('>>>>>>', 'Hello world!!!', '<<<<<<');

demo.append("Hello, world!");
demo.after("New Hello, world!");