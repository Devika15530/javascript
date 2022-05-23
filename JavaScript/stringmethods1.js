//prototype
//The prototype is a property available with all JavaScript objects.
//The prototype property allows you to add new properties and methods to strings.
function Employee(name,jobtitle,born)
{

    this.name=name;
    this.jobtitle=jobtitle;
    this.born=born;
}

Employee.prototype.salary=20000;//declaring a new property salary using prototype

const newemp=new Employee("Devika","SE",1998);
console.log(newemp);
console.log(newemp.salary);


//repeat
let text="Hey Devika"
console.log(text.repeat(3));


//replace
let text1 = "Visit Microsoft! and also Microsoft";
let result = text1.replace("Microsoft", "W3Schools");//It will replace only 1st one
console.log(result);

let globalreplacement=text1.replace(/Microsoft/g,"Google")//replace everywhere case sesnsitive
console.log(globalreplacement);

let text2 = "Visit Microsoft! and also microsoft";
let globalcaseinsensitivereplacement=text2.replace(/Microsoft/gi,"Google")//replace everywhere case insensitive
console.log(globalcaseinsensitivereplacement);



let text3 = "Mr Blue has a blue house and a blue car";//caseinsesitive mutliple names replacement
let result6 = text3.replace(/blue|house|car/gi, function (x) {
  return x.toUpperCase();
});
console.log(result6);

let result7=text2.replace(/Visit|also/gi,function(x){
    return x.toUpperCase();
})



//Search
let Blue = "Mr. blue has a Blue house";
let position = Blue.search("Blue");
let iposition=Blue.search(/Blue/i)//case insensitive-->4
console.log(position);
console.log(iposition);


//slice
