let number=9
//pass by value
let num2=number
number=7
console.log(number)//7
console.log(num2);//9

let obj={number:14}
//pass by reference
let obj2=obj
obj.number=0
console.log(obj);//0
console.log(obj2);//0


    const COURSE ={
    Coursename:'java',
    Lecturer:'dev' ,
    TotalNoOfclases:10,
    enroll(){
        //function inside object
         console.log('You are enrolled');
    }
}   

const course1={...COURSE}//copying one object to another
const course2=Object.assign({},course1);
console.log(course2)

for(let key in COURSE){
    console.log(key,COURSE[key])
}
for(let key in Object.keys(COURSE))
{
    console.log(key,COURSE[key]);
}