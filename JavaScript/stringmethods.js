let message="Welcome"
let myname="Devika garlapati"

console.log(myname.charAt(myname.length-1));
console.log(myname.charAt(6));

console.log(myname.charCodeAt(0));//to get the unicode value

;//The concat() method joins two or more strings.

//The concat() method does not change the existing strings.

//The concat() method returns a new string.

console.log(message.concat(myname));
console.log(message.concat(" ",myname))

//constructor
let text=message.constructor
console.log(text); //o/p f String(){}
 
//ENDSWITHS particular string or not returns true or false
//endswith("string",length)
//By default length is string entire length
console.log(myname.endsWith("garlapati"));//true
console.log(myname.endsWith("pati",6));


//fromCharCode converts unicode to char
let char = String.fromCharCode(65,73,75);
console.log(char);

//check for that particula string in entire string
console.log(myname.includes("iv"));

let msg = "Hello world, welcome to the universe.";//Find "world", start at position 12:
let result = msg.includes("world", 20);
console.log(result);


console.log(msg.indexOf("o",5));
console.log(msg.indexOf("welcome"));
console.log(msg.indexOf("w"));
console.log(msg.indexOf("z"));//z is not present so it will return -1
//The indexOf() method cannot search against a regular expression.
//The search() cannot take a start position argument.



let lastindex = "Hello planet earth, you are a great planet.";
console.log(lastindex.lastIndexOf("planet"));
//The lastIndexOf() method searches the string from the end to the beginning.


//localeCompare
//-1 if sorted before
//1 if sorted after
//0 if equal
let text1 = "ab";
let text2 = "ab";
console.log(text1.localeCompare(text2));//0 

let sorted="ab"
let sorted1="cd"
console.log(sorted.localeCompare(sorted1));//-1

let notsorted="cd"
let notsorted1="ab"
console.log(notsorted.localeCompare(notsorted1));//1

let text4="A"
let text5="a"
console.log(text4.localeCompare(text5));//1



//match
// The match() method matches a string against a regular expression **

// The match() method returns an array with the matches.

// The match() method returns null if no match is found.


let rain = "The rain in SPAIN stays mainly in the plain";
console.log(rain.match("ain"));//ain

console.log(rain.match(/ain/));//ain

//A global seach for "ain":
console.log(rain.match(/ain/g));


//The match() method returns an array of matches.

//The search() method returns the position of the first match.










