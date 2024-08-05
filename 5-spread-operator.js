let contacts = ["Begum", "Zeynep", "Meliha"];


//let personalFriends = contacts; //reference
//console.log(personalFriends);

let personalFriends = [ "Kardelen", ...contacts, "Gülin" ]; //seperate the contacts and personalFriends use ...

contacts.push("Iclal");
console.log(personalFriends); // ['Kardelen', 'Begum', 'Zeynep', 'Meliha', 'Gülin']
console.log(contacts); //  ['Begum', 'Zeynep', 'Meliha', 'Iclal']



let person = {
    name: "Begum",
    age: 22,
    city: "Manchester"
}

let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}

console.log(employee);

/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];

let shoppingBasket = [...shoppingList, "chocolate", "flour"];
console.log(shoppingBasket);