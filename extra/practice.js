/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
const firstName = 'Sadhan';
const job = 'Trainer';
const birthYear = 1993;
const year = 2037;

const sadhan = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

const sadhanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(sadhan);
console.log(sadhanNew);
console.log(`Just a regular string...`);

console.log('This is a \n\
multiline \n\
string...');

console.log(`This is also a
multiline
multiline
string...`);
*/

/*

const country = 'Bangladesh';
let population = 160;
const continent = 'Asia';

console.log(country, population, continent);

const isIsland = true;
const language = 'Bangla';

console.log(`Type of 'country' is ${typeof(country)}.`);

console.log(`Type of 'population' is ${typeof(population)}.`);

console.log(`Type of 'continent' is ${typeof(continent)}.`);

console.log(`Type of 'isIsland' is ${typeof(isIsland)}.`);

console.log(`Type of 'language' is ${typeof(language)}.`);

*/
/*
const age = 17;

let year;

if(age >= 18){
    console.log(`Sara is eligible for license.`);
}else{
    year = 18 - age;
    console.log(`Sara is not eligible for license.`);
}

console.log(`She have to wait another ${year} year.`);
const age = 15;

if (age >= 18) {
    console.log('Sara can start for a driving license 🚗');
} else {
    yearsLeft = 18 - age;
    console.log(`Sara is young enough. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2005;

let century;

if (birthYear >= 2000) {
    century = 21;
} else {
    century = 20;
}

console.log(century);

*/

/*

const massMark = 78; // in kg
const heightMark = 1.69; // in m
const massJohn = 92; // in kg
const heightJohn = 1.95; // in m

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);

*/

/*
const massMark = 95; // in kg
const heightMark = 1.88; // in m
const massJohn = 85; // in kg
const heightJohn = 1.76; // in m

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
*/

// const markHigherBMI = BMIMark > BMIJohn;

/*
console.log(markHigherBMI);

// console.log(markHigherBMI);

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI is higher than John's!`);
}else{
    console.log(`John's BMI is higher than Mark's!`);
}

console.log(`Mark's
BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
*/

// Type conversion

/*

const inputYear = '1993';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Sadhan'));
console.log(typeof NaN);
console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old.');
console.log('I am ' + '23' + ' years old.');
console.log('I am ' + String(23) + ' years old.');
console.log('23' - '10' - 4);
console.log('23' + '10' + 4);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '12');

let n = '1' + 1;
n = n - 1;
console.log(n);

*/


// Type Conversion

/*

const birthYear = '1993';
console.log(Number(birthYear) + 18, birthYear);
console.log(birthYear + 18);

console.log(Number('Sadhan'));
console.log(typeof (Number('Sadhan')));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion

console.log('I am ' + 23 + ' years old.');
console.log('I am ' + String(23) + ' years old.');

*/

// 5 Falsy Values: 0, '', NaN, undefined, null

/*

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sadhan'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 10;
if (money) {
    console.log(`Don't spend it all!`);
} else {
    console.log(`You should get a job!`);
}

let height = 0;
if (height) {
    console.log(`Yey, height is defined!`);
} else {
    console.log(`Height is not defined!`);
}

*/

/*

const age = 18;
if (age === 18) console.log('You are adult enough! (Strict)');
if (age === 18) console.log('You are adult enough! (Loose)');

const favorite = Number(prompt('What is your favorite number?'));
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) console.log('23 is an amazing number!'); // '23' == 23

if (favorite === 23) {
    console.log('23 is an amazing number!'); // '23' == 23
} else if (favorite === 7) {
    console.log('7 is also an amazing number.');
} else {
    console.log('The number is not 24 or 7.');
}

if (favorite !== 23) console.log('Why not 23?');

*/

/*

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive.');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false;

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive.');
} else {
    console.log('Someone else should drive...');
}

*/

/*

console.log("Hello World! I am learning JavaScript.");
console.log("I am " + String(23)  + " years old");
console.log(String(23)); // Type Coercion

console.log('23', 23);
console.log(Number('23') + 23);
console.log('23' - '10' - 4);

console.log(Number('NBICT'));

console.log(typeof(true));
console.log(typeof NaN);

console.log('23' + '10' + 4);
console.log('23' * '2');

*/

// console.log(Boolean(0));
// let myName = 1;
// console.log(myName);
// console.log(Boolean(myName));

// console.log(Boolean({}));
// console.log(Boolean(''));

/*

const money = 0;

if(money){
    console.log('Do not spend it all.');
}else{
    console.log('You should get a job.');
}

*/

// const age = 18;

// if(age !== 18)console.log('You are not adult enough!');

const password = Number(prompt('Enter password: '));

if(password === 123){
    console.log('Welcome! Sadhan Verma!!');
}else if(password === 345){
    console.log('Welcome! Abdul Motin!!');
}else if(password === 678){
    console.log('Welcome! Md. Shafiul!!');
}else{
    console.log('Wrong password!!!');
}