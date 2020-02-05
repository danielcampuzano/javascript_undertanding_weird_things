//first class functions
//allow functional programming
function mapForEach(arr,fn) {
    
    var newArr = [];
    for(var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        );
        
    }
    
    return newArr;
    
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
    return item*2;
} );
console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
});
console.log(arr3);

var checkPastLimit = function(limiter, item){
    return item > limiter;
}
//bind creates a copy of the fn on the fly with 1 as parameter for limiter
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item){
        return item > limiter;
    }.bind(this, limiter);
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);





var arr6 = _.mapObject(arr1, function(item) { return item*3 } );
console.log(arr6);

var arr7 = _.filter([1,2,3,4,5,6], function(item) {return item%2===0;} );
console.log(arr7);