//function declaration
function breakfastMenu() {
  return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
  return "I'm going to eat pizza for lunch";
}

/*
const dinnerMenu = (food) => {
  return `I'm going to eat a ${food} for dinner`;
}
*/
const dinnerMenu = food => `I'm going to eat a ${food} for dinner`; //If you have one parameter do not need paranthesis (food)

console.log( dinnerMenu("chicken salad") );

//const dinnerMenu = (food, drink) => `I'm going to eat a ${food} for dinner`;