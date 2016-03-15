//Setting up a variable for the average price
var averageItemPrice = 0;
//Setting up a counter for all of the USD prices. This should help with the average later.
var countItem = 0;
//Setting up an array of items within a certain price range


function accumulatePrices(storeList) {
  //Adding them all up...
  averageItemPrice += storeList.price;
  //Tallying how many of the objects have a USD pricing
  countItem++;
} 

//Calling a forEach loop to run through the array of objects
items.forEach(accumulatePrices);
//Printing out the average with two decimal places
console.log("The average price of all the items is "+(averageItemPrice/countItem).toFixed(2)+".");

console.log("Items that cost between $14.00 USD and $18.00 USD:");

var sortedPriceListing = items.filter(function(currentValue) {
  //Checking if the currency listed is in USD
  if(currentValue.currency_code === 'USD'){
    //Checking if the price is within the pre-determined range
    if (parseFloat(currentValue.price) > 14 && parseFloat(currentValue.price) < 18) {
      return true;
    } 
  } else {
    return false;
  }  
});
//Printing out the entire object. Analyze at will.
console.log(sortedPriceListing);

//Making a smaller array for only GBP currency. The British are that damn special.
var britishPrices = items.filter(function(currentValue) {
  //Checking if the currency type is GBP
  if(currentValue.currency_code === 'GBP') {
    return true;
  } else {
    return false;
  }
});
//Yeah, this is kind of cheating, but there's only one object with GBP currency. If there were more, there would be a neater solution, but hey, I know ahead of time, so I made my own rules.
console.log(britishPrices[0].title+' costs £'+britishPrices[0].price);

//....I'm fighting the urge to make a got wood joke, since this is supposed to be looking up wooden materials. 
// function gotWood (itemList) {
//   for (var i = 0; i < itemList.materials.length; i++) {
//     if(itemList[i].materials === 'wood'){
//       console.log(storeList.title);
//     }
//   }
// }
// items.forEach(gotWood);
//Get a list of the names of products that have a tag of 'wood'
//Input: Items array (type = array of objects)

//1. Pick out the items that have wood as one of their tags
var gotWood = items.filter(function(currentValue) {
  if(currentValue.materials.indexOf('wood') !== -1) {
    return true;
  } else {
    return false;
  }
});
//2. Convert the items from step 1 to just a list of items

//3. Return or display the list


//Output: The items that have a tag of wood (type - array of product names, strings)
console.log(gotWood);

function manyMaterials (itemList) {
  if(itemList.materials.length >= 8) {
    console.log(itemList.title+'\n\n'+itemList.materials+'\n\n');
  }
}
items.forEach(manyMaterials);

var creatorCount = 0;

function whoMadeIt (storeList) {
  if(storeList.who_made === 'i_did') {
    creatorCount++;
  }
}
items.forEach(whoMadeIt);
console.log(creatorCount+' were made by their sellers');