//const variables must be intialized while we are declaring that
const age=20;
console.log(age);

//const variables must be intialized when they declare
// const PI;---->ERROR
// PI = 3.14159265359;
//cannot incremented

//const arrays

const names=["Dev","Sanav","Subbi"];
console.log("Before pushing the element: "+names);
names.push("Maa");
console.log("After: "+names);

// names=["cat","rat"]----->Assignment to constant variable.
// console.log(names);

//const objects
const objects={name:"Devika",age:25}
console.log(objects);
objects.age=30;//changing the value
objects.Daugtherof="Subbarao"//adding the new value
console.log(objects);

//objects = {type:"Volvo", model:"EX60", color:"red"}; //error Assignment to constant variable.  

//Block scope and hoisting same as let
