// Fortune Teller
const tellFortune = function ( numKids, partnersName, geoLocation, jobTitle)
{
  console.log( `You will be a ${jobTitle} in  ${geoLocation}, and married to ${partnersName} with ${numKids} kids.` );
};



// The Age Calculator
const calculateDogAge = function (puppiesAge, conversionRate = 7)
{
  dogAge = puppiesAge * conversionRate
  console.log(`our doggie is ${ dogAge } years old in dog years!`);
};

// The Lifetime Supply Calculator
const calculateSupply = function ( myAge, snacksPerDay )
{
  const maxAge = 72;
  const daysInYear = 365.25;
  const lifeTimeSupply = Math.ceil((maxAge - myAge) * (daysInYear * snacksPerDay));

  console.log("You will need " + lifeTimeSupply + " to last you until the ripe old age of " + maxAge + ".")
};


// calculate the circumference of a circle
const calcCircumfrence = function (radius)
{
  const circumference = 2 * Math.PI * radius;
  console.log('The circumference is ' + circumference);
};

// calculate the area of a circle
const calcArea = function (radius)
{
  const area = Math.PI * Math.pow(radius,2);
  console.log('The area is ' + area);
};

// The Temperature Converter
const celsiusToFahrenheit = function (temperatureCelcius)
{
  const temperatureFarenheight = (temperatureCelcius * 9 / 5) + 32;
  console.log(`${temperatureCelcius}°C is ` + temperatureFarenheight + "°F");
};

const fahrenheitToCelsius = function (temperatureFarenheight)
{
  const temperatureCelcius = (temperatureFarenheight - 32) * 5 / 9;
  console.log(temperatureFarenheight + "°F is " + temperatureCelcius + "°C");
};
