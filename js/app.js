'use strict';

alert('Happy Birthday Jasmine!!!');

// Question 1

var gamePlayRes = prompt('Do you want to play a game?');
gamePlayRes = gamePlayRes.toLowerCase();
function gamePlay () {
  if (gamePlayRes === null || gamePlayRes === 'n' || gamePlayRes === 'no') {
    alert('Sorry. You have to play any ways...');
  } else {
    alert('Yay!! Let\'s play!!');
  }
}
gamePlay();


// Question 2


var nounName = prompt('Name a noun.');
nounName = nounName.toLowerCase();
function nounNameRes () {
    if (nounName === null || nounName === no || nounName === NO || nounName === N || nounName === n);
    alert('Please give me something to work with?'); 
  } else if {
    alert('Wonderful choice!');localStorage
  };

nounNameRes();


// Question 3

var adjectiveName = prompt('Name an adjective.');
adjectiveName = adjectiveName.toLowerCase();
function adjectiveNameRes () {
    if (nounName === null || nounName === no || nounName === NO || nounName === N || nounName === n);
    return'You have to put something in.';
  } else {
    return'Thank you!';
};

console.log(adjectiveName());
