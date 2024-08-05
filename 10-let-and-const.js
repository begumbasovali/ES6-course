//let: block scoped
//var: function
//const: block scoped

if (false) {
  var example = 5;
}

console.log(example); //undefined


/*
var example;

if (false) {
  example = 5;
}
*/

/*const example = 5;
example = 10; // syntax error
console.log(example);
*/
//use let keyword to reassign

const example2 = [];
example2.push = 3;
console.log(example2);

const example3 = {};
example3.firstName = 'Begum';
console.log(example3);



function sayHello(){
  for(var i = 0; i < 5; i++){
    console.log(i)
  }
  console.log(i)
}

sayHello();