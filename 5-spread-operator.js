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