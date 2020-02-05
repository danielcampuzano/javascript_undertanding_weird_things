var greet = 'Hello';
var greet = 'Hola';

console.log(greet);

var english = {};
var spanish = {};

//Fake namespaces

english.greetings = {};
english.greetings.greet= 'Hello';
spanish.greet= 'Hola';

console.log(english);