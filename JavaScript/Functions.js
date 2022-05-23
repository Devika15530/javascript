function addme(){
    var num1=document.getElementById('num1').value;
    var num2=document.getElementById('num2').value;
       var c=parseInt(num1)+parseInt(num2);
    console.log(typeof(num1));
    document.getElementById('Output').innerHTML=c;
}