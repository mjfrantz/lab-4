// function sum(a, b) {
//     return 'The result is: ' + (a + b);
// }

// let operation = sum(2, 3);

// console.log(operation);

// function multiply(a, b) {
//     return 'The result is ' + (a * b);
// }

// let operation2 = multiply(5, 6);

// console.log(operation2);

// function subtract(a, b) {
//     return 'The result is ' + (a - b);
// }

// let operation3 = subtract(9, 15);

// console.log(operation3);

// function divide(a, b) {
//     return 'The result is ' + (a / b);
// }

// let operation4 = divide(20, 5);

// console.log(operation4);

// // function traveling(destination) {
// //     return "I am traveling to " + destination;
// // }

// // let travel;

// // travel = traveling("Hawaii");
// // travel = traveling("New York");

// // console.log(travel);

// // option 2

// // let traveling = function (destination) {
// //     return "I am traveling to " + destination;
// // }

// // let travel;
// // travel = traveling('Kailua');
// // travel = traveling('Medellin');

// // console.log(travel);

// //arrow function

// let traveling = destination => 'I am traveling to ' + destination;

// let travel;
// travel = traveling('K-bay');
// travel = traveling('Kailua');

// console.log(travel);

// (function (topic) {
//     console.log('I am learning ' + topic);
// })('JS');

// const addition = (a, b) => a + b;
// let resultAddition = addition(5, 5);
// console.log(resultAddition);

// (function (x, y) {
//     console.log(x * y);
// })(2, 4);

// const today = new Date();

// // let value = today;
// let value = today.getMonth();
// console.log(value);

// const logged = true;
// const name = 'Mike'
// const age = 30;

// console.log(logged ? 'Welcome ' : 'Please log into the system');
// // if (logged) {
// //     console.log('Welcome ' + name);
// // } else {
// //     console.warn('Please log into the system');
// // }

// if (age >= 21) {
//     console.log('Welcome ... ' + name);
// } else {
//     console.warn('You are underage ');
// }

// let money = 300;
// let totalCart = 500;
// let creditCard = false;

// if (money > totalCart) {
//     console.log('Successful transaction ');
// } else {
//     console.log('Insufficient funds...');
// }

// if (creditCard) {
//     console.log('you pay with a credit card');
// } else {
//     console.log(' You pay with a debit card');
// }

// // OR & AND

// let hour = 8;

// if (hour > 0 && hour < 12) {
//     console.log('Good Morning');
// } else if (hour > 12 && hour <= 18) {
//     console.log(' Good Afternoon ');
// } else if (hour > 18 && hour < 24) {
//     console.log(' Good night');
// } else {
//     console.log('This is the end of the world...');
// }

// const method = 'credit';

// switch (method) {
//     case 'credit':
//         payment(method);
//         break;
//     case 'debit':
//         payment(method);
//         break;
//     case 'cash':
//         payment(method);
//         break;
// }

// function payment(m) {
//     console.log(`Your payment method was ${m}`);
// }

let products = ['chips', 'coca cola', 'pepsi', 'dr pepper', '7 up'];
let prices = [1.00, 0.75, 1.25, 1.50, 2.00];

let menu = '';
for (let i = 0; i < products.length; i++) {
    menu = menu + `Product ${i}: ${products[i]} ---> ${prices[i]} <br>`;
}

document.getElementById('division').innerHTML = menu;

let selection = prompt("Select the number of the product : ");
let number = prompt("Number of products : ");

switch (selection) {
    case '0':
        pay();
        break;
}

function pay() {
    subtotal = (prices[selection] * number);
    taxes = subtotal * 0.11;
    total = subtotal + taxes;
    alert(`Subtotal ----- $${subtotal} \n tax ----- $${taxes} \n total ---- $${total}`);
}