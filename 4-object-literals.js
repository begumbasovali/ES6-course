function addressMaker(city, state) {
  const newAdress = {city, state};
  //const newAdress = {newCity: city, newState: state};
  
  console.log(newAdress);
}

addressMaker('Begum', 'LA');


//Challenge: Use destructuring for the code below


/*function addressMaker(address) {
  const newAddress = {
      city: address.city,
      state: address.state,
      country: 'United States'
  };
  
}

addressMaker({city: 'Austin', state: 'Texas'});
*/

function addressMaker(address) {
  const {city, state} = adress;
  const newAddress = {
      city,
      state,
      country: 'United States'
  };
  console.log(`${newAddress.city}, ${newAddress.state},${newAddress.country}`)
  
}

addressMaker({city: 'Begum', state: 'NYC'});