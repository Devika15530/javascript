// const course={
//     Coursename:'SalesForce',
//     Lecturer:'XYZ',
//     TotalNoOfclases:10,
//     enroll(){//function inside object
//         console.log('You are enrolled');
//     }
// }

//code will be duplicated if u create objects like this so u need to use factory function

// course.enroll();//calling function which is present inside object

// console.log(course.Coursename);Dot Notation

//console.log(course["Coursename"]);Bracketnotation
// let totalclass="TotalNoOfclases"
// console.log(course["totalclass"])

// //Dynamically we can properties
// course.price=999;
// console.log(course);

//Factory Function
function createCourse(Coursename,Lecturer,TotalNoOfclases)//pascal case //LITERAL
{
    return{
        Coursename:Coursename,
        Lecturer:Lecturer ,
        TotalNoOfclases:TotalNoOfclases,
        enroll(){
            //function inside object
             console.log('You are enrolled');
        }
    }
   
  
}
//INTERNALL JAVASCRIPT WILL TAKE IT AS
//CONST COURSE =NEW OBJECT{
    // Coursename:Coursename,
    // Lecturer:Lecturer ,
    // TotalNoOfclases:TotalNoOfclases,
    // enroll(){
    //     //function inside object
    //      console.log('You are enrolled');
    // }
//}
const course=createCourse('Salesforce','dev',10)
course[2]=createCourse('js','xyz',20)
console.log(course);

//Constructor Function(Pascal case starting captial letter)
function Course(title,teacher)
{ 
    this.title=title,
    this.teacher=teacher,
   this.enroll=function(){
        
         console.log('You are enrolled');
    }
}
//2ways to return the output 1 using new second using this


const courses=new Course('java','dev');
//new keyword automatically returns the object 
console.log(courses);
console.log(courses.constructor);
console.log(course.constructor);


delete courses.teacher//deleting the property

courses.checkEnrollment=function()//adding the function
{
    console.log("Enrolled for 5 courses");
}



const my_name='Devika'//Devika is a string literal and my_name is a string object
console.log(my_name.charAt(3));//chartat these are string class function 
//primitive datatype immutable