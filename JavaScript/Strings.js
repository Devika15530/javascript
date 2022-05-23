let string="Hey"
let name="Hey 'Devika'"
let name1='Hey "Mounika" '

console.log(string);
console.log(name);
console.log(name1);
console.log(name.length);

let myname="Hey \" Subbi\""//to avoid double quotes problem use \" place u r string \"
let text= 'It\'s alright.';
console.log(text);

let text1 = "The character \r is called backslash.";
console.log(text1);

document.getElementById("demo").innerHTML = 
"Hello Dolly!";

//STRINGS AS OBJECTS////

let x = "John";//x is string
let y = new String("John");//y is object

// Do not create Strings objects.

// The new keyword complicates the code and slows down execution speed.

// String objects can produce unexpected results:

if(x==y){
    console.log("hey they are equal");
}
if(x===y){
    console.log("hey they are equal");
 
}
else
{
    console.log("hey they are not equal");

}
//Never Create Strings as Objects</h2>
//JavaScript objects cannot be compared.</p>

let string1 = new String("John");  // string1 is an object
let string2 = new String("John");  // string2 is an object
document.getElementById("stringasobject").innerHTML = (string1==string2);

//Comparing two JavaScript objects always returns false.