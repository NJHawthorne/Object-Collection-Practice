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
console.log("The average price of all the items is $"+(averageItemPrice/countItem).toFixed(2)+".");

console.log("Items that cost between $14.00 USD and $18.00 USD:\n\n");
//Starting a filter to sort which items have both USD currency and a certain price range
var sortedPriceListing = items.filter(function(currentValue) {
  //Checking if the currency listed is in USD
  if(currentValue.currency_code === 'USD'){
    //Checking if the price is within the pre-determined range. Had to convert strings to numbers.
    if (parseFloat(currentValue.price) > 14 && parseFloat(currentValue.price) < 18) {
      return true;
    } 
  } else {
    return false;
  }  
});
//Starting a map so I can get the title property of the objects in the array. That was a mouthful.
sortedPriceListing.map(function(currentValue) {
  console.log(currentValue.title+'\n\n');
});

//Making a smaller array for only GBP currency. The British are that damn special.
var britishPrices = items.filter(function(currentValue) {
  //Checking if the currency type is GBP
  if(currentValue.currency_code === 'GBP') {
    return true;
  } else {
    return false;
  }
});
//Yeah, this is kind of cheating, but there's only one object with GBP currency. If there were more, I would have used .map(), but hey, I know ahead of time, so I made my own rules.
console.log(britishPrices[0].title+' costs £'+britishPrices[0].price);


//starting a filter to check for wooden items in the main array
var gotWood = items.filter(function(currentValue) {
  //If the value exists in the materials section of the array, return true so it can be filtered
  if(currentValue.materials.indexOf('wood') !== -1) {
    return true;
  //everything else can go away. booooo.
  } else {
    return false;
  }
});
console.log("\nMaterials that contain wood:\n\n")
//Starting another map just so I can pull the titles out of this array. Whoop whoop
gotWood.map(function(currentValue) {
  console.log(currentValue.title+'\n');
});
console.log('\nItems made out of eight or more materials:\n\n');
//Making a function specifically to console.log the title and materials of the material-intensive items.
function manyMaterials (itemList) {
  //checking if the length of the materials array is greater than/equal to 8
  if(itemList.materials.length >= 8) {
    console.log(itemList.title+'\n\n'+itemList.materials+'\n\n');
  }
}
//running the forEach() method to get my console logs
items.forEach(manyMaterials);

//Keeping a counter for how many people made their own stuff
var creatorCount = 0;
//Starting a function to see who made their own items
function whoMadeIt (storeList) {
  if(storeList.who_made === 'i_did') {
    //for every person who made their own stuff, this counter grows by 1
    creatorCount++;
  }
}
//Running the forEach() method to get my creator count up
items.forEach(whoMadeIt);
console.log(creatorCount+' were made by their sellers');