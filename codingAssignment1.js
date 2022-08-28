let ages = [3, 9, 23, 64, 2, 8, 28, 93]
//added an age to the end of the array
ages.push(103);
//subtracted last element from the first element
let result = ((ages[ages.length - 1]) - ages[0]);

console.log(result);
//iterated the array using a loop and calculated the average of the array
let total = 0;
for(let age of ages) {
    total += age;
}    
total /= ages.length
//output 37
console.log("The average age is", total);


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//Used a loop to iterate through the array and calculate the average number of letters
//also used the map method
let lengths = names.map(function(element) {
    for (i = 0; i < names.length; i++) {
       return element.length;
    }
})
console.log(lengths);

let nameslengths = [3, 5, 3, 5, 4, 3];  

let totalOfName = 0
for(let nameslength of nameslengths) {
    totalOfName += nameslength;
}
totalOfName /= nameslengths.length;

console.log("average:", totalOfName);
//used join method to concatenate all names with space in between
for(i = 0; i < names.length; i++) {
    console.log(names.join(' '));
}


//loop to iterate over names array and add the length of each name to the nameLengths array.
let namesArray = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
    for(i = 0; i < namesArray.length; i++){
    }
nameLengths = [3, 5, 3, 5, 4, 3];
for(i = 0; i < nameLengths.length; i++){
    console.log(nameLengths[i]);
}
//used reduce method to calculate the sum of all elements in the array
let sumOfNameLengths = nameLengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sumOfNameLengths);


//function that takes two parameters, word and n
function repeatWords(word, n) {
    let repeatedWord = "";
    // while loop returns the word concatenated to itself n number of times, since n > 0, loop does not go past n
    while (n > 0) {
        repeatedWord += word;
        n--;

    }
    return repeatedWord;
}
console.log(repeatWords("Hello", 4));




//function takes 2 paramaters, firstName and lastName
function createFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}
//returns fullName seperated by a space
createFullName('Joseph', 'Faya');




//created an array called currencies
currencies = [11, 15, 20, 25, 30]; 
function trueIfGreater(currencies){
let sum = 0;
//created for loop to find sum of all numbers in array
for(let currency of currencies) {
    sum += currency;
    }
    return sum
} 
console.log(trueIfGreater(currencies));
//create if statement to check if the sum is greater than 100
if(trueIfGreater(currencies) > 100) {
    console.log(true);
}



currencies = [11, 15, 20, 25, 30]; 
function findAverage(currencies){
    //used for loop to figure out average of the array
    let result = 0;
    for(let currency of currencies) {
        result += currency;
        }
    result /= currencies.length;
    return result;
    } 
console.log(findAverage(currencies));



//created 2 arrays
let heights = [1, 2, 3, 4, 5];
let weights = [5, 6, 7, 8, 9];

//created function with 2 parameters
function returnTrue(heights, weights) {
    result = 0;
    //created for loop to figure out the average of the first array
    for(let height of heights) {
        result += height;
    }
    result /= heights.length; 
    total = 0;
    //created for loop to find the average of the seconde array
    for(let weight of weights) {
        total += weight;
    }
    total /= weights.length;
}
returnTrue(heights, weights);
//printed both averages to the console
console.log(result);
console.log(total);
//checked if the average of the first array was greater than the second array
if(result > total){
    console.log(true);
} else {
    console.log(false);
}





//created 2 variables 
let isHotOutside = 81;
let moneyInPocket = 11;
//created function that checks if variable meets conditions and returns true
function willBuyDrink(isHotOutside, moneyInPocket) {
    if(isHotOutside > 80 && moneyInPocket > 10.50) {
        console.log(true);
     }
    }    

willBuyDrink(isHotOutside, moneyInPocket);




//In the function I am looking to buy milk at the store, but only if I have enough money

//Created 2 variables, 1 is an array that has all the different bills I own
let milk = 5;
let bills = [1, 5, 10 , 10, 20];

function enoughMilk(bills) {
    totalMoney = 0;
    //used for/of loop to add all numbers in the array
    for(let bill of bills){
        totalMoney += bill
    }
    return totalMoney;
}
//called function enoughMilk(bills)
enoughMilk(bills);
//created if/else statement to check if I have enough money to buy milk
if(totalMoney > milk) {
    console.log("I can buy milk.");
} else {
    console.log("I don't have enough money.");
}






