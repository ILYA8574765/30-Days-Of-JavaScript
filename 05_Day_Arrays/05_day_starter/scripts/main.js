const arr = []
console.log(arr)

const fruits = ['banana', 'orange', 'mango', 'lemon', 'abrecos']
console.log('Number of numbers:', fruits.length)

Fruit1 = fruits[0]
console.log(Fruit1)

Fruit2 = fruits[2]
console.log(Fruit2)

Fruit3 = fruits[4]
console.log(Fruit3)

const mixedDataTypes = [
  'Asabeneh',
  250,
  true,
  { country: 'Finland', city: 'Helsinki' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }]
 
  console.log(mixedDataTypes.length);
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
  console.log(itCompanies.length);
  console.log(itCompanies);
  comp1 = itCompanies[0]
console.log(comp1)

comp2 = itCompanies[3] 
console.log(comp2)
// если мы знаем количество элементов то фактически можно просто посчитать, но можно и вот так:
comp3 = itCompanies[0]
console.log(comp1)
console.log(itCompanies[itCompanies.length - 1]);

console.log(itCompanies.includes('Facebook'));
console.log(itCompanies.includes('VK'));

const filteredCompanies = [];
for (let company of itCompanies) {
    if ((company.match(/o/g) || []).length <= 1) {
        filteredCompanies.push(company);
    }
}
console.log(filteredCompanies);

itCompanies.sort();
console.log(itCompanies);

itCompanies.reverse();
console.log(itCompanies);

const firstThreeCompanies = itCompanies.slice(0, 3);
console.log(firstThreeCompanies);

const lastThreeCompanies = itCompanies.slice(-3);
console.log(lastThreeCompanies);

itCompanies.shift();
console.log(itCompanies);

const middleIndex = Math.floor(itCompanies.length / 2);
itCompanies.splice(middleIndex, 1);
console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);

itCompanies.length = 0;
console.log(itCompanies);

//lvl 2

import countries from './countries.js';
import webTechs from './web_techs.js';

console.log(countries);
console.log(webTechs);

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[.,]/g, '').split(' ');
console.log(words);
console.log(words.length); 

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

if (shoppingCart.includes('Honey')) {
  shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

console.log(shoppingCart);

if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

