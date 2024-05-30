const name = "Sajid"
const repoCount = 50

// console.log(name + repoCount + " value");

// console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Mohammed-sajid-ali")

// console.log(gameName[6]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("e"));

const newString =gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "   Sajid   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sajid.com/sajid%20Khan"

console.log(url.replace("%20","-"));
console.log(url.includes("wajid"))
console.log(gameName.split("-"))

