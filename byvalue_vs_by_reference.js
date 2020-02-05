//by value (primitives)
var a = 3;
var b;

//Creates a new spot in memory and copies 
// the value of a into it
b = a;

a = 2;

console.log(a);
console.log(b);


//by reference (all objects - including functions)

var c = { greeting:'hi'};

var d;

d = c;

c.greeting = 'hello'; //mutate

console.log(c);
console.log(d);

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; //mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

// In this case the equals operator sets up new memory space (new address)
c = {greeting: 'howdy'};
console.log(c);
console.log(d);

