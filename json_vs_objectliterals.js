var objectLiteral = {
    firstName: 'Mary',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

console.log(JSON.parse('{"firstName": "Mary", "isAProgrammer": true}'));