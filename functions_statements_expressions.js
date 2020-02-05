//function statement
//It doesnt return a value
//It doesnt result in a value
//It is placed in memory

greet();

function greet() {
    console.log('hi');
}

// function expression
// It results in a value which is set
// to the variable
var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet();

function log(a) {
    a();
}

log(function() {
    console.log('hi');
});