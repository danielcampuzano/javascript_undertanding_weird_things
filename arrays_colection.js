var arr = [1,
           false,
           {
               name: 'Daniel',
               address: 'Calle 8'
           },
           function(name){
               var greeting = 'Hello';
               console.log(greeting + name)
           },
           "hello"
];

console.log(arr);

//invoke the function
arr[3](arr[2].name);
