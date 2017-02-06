
'use strict'
// When we create an object using a jason or a constructor
//JS creates a prototype for it by default that is Object.prototype.
var house = {
		price : 200000
}

//See that the default prototype is created and set to an empty obejct.
console.log('prototype of house is: ' + house.__proto__)
console.log('prototype of house is by default Object.prototype: ' , house.__proto__ === Object.prototype);

// Create an empty object and set its prototype ot house
var myHouse = Object.create(house);

//The price property is not define for housse1. But because myHouse's prototype is house
//Js Look for the price on house and returns it. 
console.log(myHouse.price);

//let's check the prototype chain. JS checks for toString on myHouse and does not find it
// then checks on it's prototype, which does not have toString(), then checks for toString 
//on the prototype of the prototype i.e. that of house and returns it
console.log('type of myHouse.__proto__.toString', typeof myHouse.__proto__.toString);

//See that the prototype of myHouse is house
console.log('the prototype of myHouse is house: ', myHouse.__proto__ === house);

// the prototype of myHouse is not that  of object
console.log('the prototype of myHouse is that  of Object: ', myHouse.__proto__ === Object.prototype);

// but the prototype of the prototype of myHouse is Object.prototype
console.log('the prototype of the prototype of myHouse is Object.prototype: ', myHouse.__proto__.__proto__ === Object.prototype);

//Object fields can be set using Object.defineProperty()


Object.defineProperty(myHouse,'height',{
	value :45,
	writable: true,
	enumerable: true,
	configuable:true
})

console.log(myHouse.height);

//Using Object.defineProperty to create a property and automaically locks it (writable : false);
// and prevents it to be iterable and configurable. To avoid that override the those default properties,s 
//value to true i.e. (writable : false), (enumerable: true), 
myHouse.height = myHouse.height+ 5 ;

//try comment 'writable: true', and see
console.log(myHouse.height);

//try comment 'enumerable: true', and see
for (var x in myHouse){console.log('myHouse contains property: '+x);}

//multiple properties can be define using Object.defineProperties()
Object.defineProperties(myHouse,{
	'width' : {
		value : '300 m2',
		writable: true,
	    enumerable: true,
		configuable:true
	},
	'age' : {
		value : 15 ,
		writable: true,
	    enumerable: true,
		configuable:true
	}
	
});
console.log('Now the properties in myHouse after using Object.defineProperties are');
for (var x in myHouse){console.log('myHouse contains property: '+x.toUpperCase());}

// Notice that the property color does not appear but sits on the prototype and remain accessible 
//let's verify that

console.log('Does age directly belong to myHouse?: ', myHouse.hasOwnProperty('age'));
console.log('Does color directly belong to myHouse?: ', myHouse.hasOwnProperty('color'));

// verify prototypes using a function, function checks on the prototype chain instead of
// using === that ckecks for the direct prototype. because Object.prototype is in prototype chain
//of myHouse, the folling returns true
console.log('Object.prototype is prototype of myHouse: ', Object.prototype.isPrototypeOf(myHouse));
console.log('house.__proto__ is prototype of myHouse: ', house.__proto__.isPrototypeOf(myHouse));

//check for fields using 'in'. this also works through the prototype chain
console.log('the field width is in myHouse: ', 'width' in myHouse);
console.log('the field toString() is in myHouse: ', 'toString' in myHouse);

// the field in an object does not neccessairily exist in its prototype
console.log('Is field height is in house: ', 'height' in house);
