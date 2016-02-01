//Intro on how to use coinCounter function displayed in console.

console.log("Enter a value of coins to count by typing: coinCounter('value')");
console.log("example: coinCounter(.92)");

// Behold! coinCounter function!
var coinCounter = function (changeValue) {

  // Initialize a JavaScript object to hold the coins

  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
    };

  //Converting change value to intergers for easier math time!

  var change = Math.floor(changeValue * 100);

  //Code for getting total of quarters.

  if (change / 25 >= 1) {
    coinPurse.quarters += Math.floor(change / 25);
    change = change % 25;
  }

  //Code for getting total of dimes.

  if (change / 10 >= 1) {
    coinPurse.dimes += Math.floor(change / 10);
    change = change % 10;
  }

  //Code for getting total of nickels.

  if (change / 5 >= 1) {
    coinPurse.nickels += Math.floor(change / 5);
    change = change % 5;
  }

  //Code for getting total of pennies.

  if (change) {
    coinPurse.pennies += Math.floor(change);
  }

  //Display coinPurse object in console.

  console.log("coinPurse", coinPurse);
};