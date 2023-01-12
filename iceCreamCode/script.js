app.js
'use strict';
let iceCreamFlavors = [
 { name: "Chocolate", type: "Chocolate", price: 2 }, 
 { name: "Strawberry", type: "Fruit", price: 1 }, 
 { name: "Vanilla", type: "Vanilla", price: 2 }, 
 { name: "Pistachio", type: "Nuts", price: 1.5 }, 
 { name: "Neapolitan", type: "Chocolate", price: 2}, 
 { name: "Mint Chip", type: "Chocolate", price: 1.5 },
 { name: "Raspberry", type: "Fruit", price: 1},
];
// { scoops: [], total: }
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
console.log(`You've made ${total} $ today`);
});