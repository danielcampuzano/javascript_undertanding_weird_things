var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname:'John',
    lastname: 'Doe'
}

//Never use this because modern browsers provide a way to directly acces the prototype
//don´t do this EVER!
john.__proto__ = person;  //John now inherits from person
console.log(john.getFullName());
console.log(john.firstname);

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());