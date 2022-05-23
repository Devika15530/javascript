let x=10;
//let x=20; error u cannot redclare a variable twice
//U cannot redeclare same value twice with let but u can do that by using var

{
    let x=5;//Redeclartion allowed inside block and outside block by using let 
    console.log("inside variable"+x);
}

console.log("value of x "+x);//10


var v=10;
console.log("First declred v value"+v);
var v=20;
console.log("Second declare v value"+v);//Redeclaration is allowed
{
    var v=90;
}
console.log(v);//90




//let variables declared inside block cannot be accessed outside
{
    let letinsidevariable=10;
    var varinsidevariable=20;

}
//console.log(letinsidevariable);error because it cannot be accessed outside
console.log("varinsidevariable is "+varinsidevariable);//accessed


myname="Devika"//intilization
var myname;//declaration
console.log("name is"+myname);//printing

// myplace="Ponnur"//intilization before declaring using let
// let myplace;
// console.log("place is"+myplace);//Cannot access 'myplace' before initialization




