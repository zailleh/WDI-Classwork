// Fortune Teller
console.log('\r\nFortune Teller');

const numberOfChildren = 0;
const partnersName = 'Lisa';
const geographicalLocation = 'Sydney';
const jobTitle = 'Junior Ruby Developer';


console.log( `You will be a ${jobTitle} in  ${geographicalLocation}, and married to ${partnersName} with ${numberOfChildren} kids.` );


// The Age Calculator
console.log('\r\nThe Age Calculator');

const currentYear = 2018;
const birthYear = 1973;
const age1 = currentYear - birthYear; // if already had birthday
const age2 = age1 - 1; // before birthday

console.log('They are either ' + age1 + ' or ' + age2 +'.');


// The Lifetime Supply Calculator
console.log('\r\nLifetime Supply Calculator');
const myAge = 30;
const maxAge = 80;
const snacksPerDay = 3;

const daysInYear = 365.25;

const lifeTimeSupply = Math.round((maxAge - myAge) * (daysInYear * snacksPerDay));

console.log("You will need " + lifeTimeSupply + " to last you until the ripe old age of " + maxAge + ".")

// The Geometrizer
console.log('\r\nThe Geometrizer');

const radius = 24.9;
const circumference = 2 * Math.PI * radius;
const area = Math.PI * Math.pow(radius,2);

console.log('The circumference is ' + circumference);
console.log('The area is ' + area);

// The Temperature Converter
console.log('\r\nThe Temperature Converter');

let temperatureCelcius = 22.1;
const temperatureFarenheight = (temperatureCelcius * 9 / 5) + 32;
console.log(`${temperatureCelcius}°C is ` + temperatureFarenheight + "°F");
temperatureCelcius = (temperatureFarenheight - 32) * 5 / 9;
console.log(temperatureFarenheight + "°F is " + temperatureCelcius + "°C");
