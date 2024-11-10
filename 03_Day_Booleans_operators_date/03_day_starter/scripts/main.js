let firstName = "ilya";
let lastName = "Sheremetyev";
let country = "Russia";
let city = "Omsk";
let age = 16;
let isMarried = false;
let year = 2024;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country); 
console.log(typeof city); 
console.log(typeof age); 
console.log(typeof isMarried); 
console.log(typeof year);

console.log(typeof '10' === typeof 10);
console.log(parseInt('9.8')=== 10);

console.log(4 > 3); 
console.log(4 == 4); 
console.log(4 >= 4); 

console.log(4 < 3); 
console.log(4 != 4); 
console.log(4 !== 4); 

console.log(4 > 3) //t
console.log(4 >= 3) //t
console.log(4 < 3) //f
console.log(4 <= 3) //f
console.log(4 == 4) //t
console.log(4 === 4) //t
console.log(4 != 4) //f
console.log(4 !== 4) //f
console.log(4 != '4') //f
console.log(4 == '4') //t 
console.log(4 === '4') // f 

let Length1 = 'python'.length;
let Length2 = 'jargon'.length;
console.log(Length1 != Length2); 

console.log(4 > 3 && 10 < 12); // t
console.log(4 > 3 && 10 > 12); // f
console.log(4 > 3 || 10 < 12); // t
console.log(4 > 3 || 10 > 12); // t
console.log(!(4 > 3)); // f
console.log(!(4 < 3)); // t
console.log(!(false)); // t
console.log(!(4 > 3 && 10 < 12)); // f
console.log(!(4 > 3 && 10 > 12)); // t
console.log(!(4 === '4'));//t
console.log(!('dragon'.includes('on') && 'python'.includes('on'))); // t

//lvl 2
let base = prompt("Enter base:");
let height = prompt("Enter height:");
let area = 0.5 * base * height;
console.log("The area of the triangle is " + area);

let sideA = prompt("Enter side a:");
let sideB = prompt("Enter side b:");
let sideC = prompt("Enter side c:");
let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
console.log("The perimeter of the triangle is " + perimeter);

let length = prompt("Enter length:");
let width = prompt("Enter width:");
let areaRectangle = length * width;
let perimeterRectangle = 2 * (parseFloat(length) + parseFloat(width));
console.log("The area of the rectangle is " + areaRectangle);
console.log("The perimeter of the rectangle is " + perimeterRectangle);

let radius = prompt("Enter radius:");
let pi = 3.14;
let areaCircle = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log("The area of the circle is " + areaCircle);
console.log("The circumference of the circle is " + circumference);

let slope = 2;
let xIntercept = 2 / slope;
let yIntercept = -2;
console.log("Slope is " + slope);
console.log("X-intercept is " + xIntercept);
console.log("Y-intercept is " + yIntercept);

let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;
let slopeBetweenPoints = (y2 - y1) / (x2 - x1);
console.log("The slope between the points is " + slopeBetweenPoints);

if (slope === slopeBetweenPoints) {
    console.log("The slopes are equal.");
} else {
    console.log("The slopes are not equal.");
}

let x = prompt("Enter x value:");
let y = x * x + 6 * x + 9;
console.log("The value of y is " + y);

let hours = prompt("Enter hours:");
let rate = prompt("Enter rate per hour:");
let pay = hours * rate;
console.log("Your weekly earning is " + pay);

let name = prompt("Enter your name:");
if (name.length > 7) {
    console.log("Your name is long.");
} else {
    console.log("Your name is short.");
}

let firstName1 = 'Asabeneh';
let lastName1 = 'Yetayeh';
if (firstName.length > lastName.length) {
    console.log("Your first name, " + firstName1 + " is longer than your family name, " + lastName1);
} else {
    console.log("Your family name, " + lastName1 + " is longer than your first name, " + firstName1);
}

let myAge = 250;
let yourAge = 25;
let ageDifference = myAge - yourAge;
console.log("I am " + ageDifference + " years older than you.");

let birthYear = prompt("Enter birth year:");
let currentYear = new Date().getFullYear();
let age1 = currentYear - birthYear;
if (age1 >= 18) {
    console.log("You are " + age1 + ". You are old enough to drive.");
} else {
    console.log("You are " + age1 + ". You will be allowed to drive after " + (18 - age1) + " years.");
}

let yearsLived = prompt("Enter number of years you live:");
let secondsLived = yearsLived * 365 * 24 * 60 * 60;
console.log("You lived " + secondsLived + " seconds.");

let date = new Date();
let year1 = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0');
let day = String(date.getDate()).padStart(2, '0');
let hours1 = String(date.getHours()).padStart(2, '0');
let minutes = String(date.getMinutes()).padStart(2, '0');

console.log(`YYYY-MM-DD HH:mm: ${year1}-${month}-${day} ${hours1}:${minutes}`);
console.log(`DD-MM-YYYY HH:mm: ${day}-${month}-${year1} ${hours1}:${minutes}`);
console.log(`DD/MM/YYYY HH:mm: ${day}/${month}/${year1} ${hours1}:${minutes}`);

//lvl 3
let date2 = new Date();
let year2 = date.getFullYear();
let month2 = String(date.getMonth() + 1).padStart(2, '0'); 
let day2 = String(date.getDate()).padStart(2, '0');
let hours2 = String(date.getHours()).padStart(2, '0');
let minutes2 = String(date.getMinutes()).padStart(2, '0');

let formattedDate = `${year2}-${month2}-${day2} ${hours2}:${minutes2}`;
console.log(formattedDate);