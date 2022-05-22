//Example-1
var x=23;
function myFunc()
{
    x=20 
    console.log(x)
}

myFunc()
console.log(x)
/*output:
20
20*/

//Example-2
function myFunc()
{
   var y=20 
    console.log(y)
}
myFunc()
console.log(y)

/*output:
Reference error :y is not defined because y is only defined in functional scope not in global scope*/

//Example-3
let animal='dog';
console.log(animal);

if(true){
    let animal = 'cat';
    console.log(animal);
}

console.log(animal); 
/*output:
dog
cat
dog*/

//Example-4
var a=10
function check(){
    console.log(x+y)
}
check()
var y=5
/* output:NaN
because var y=undefined so x+y= Nan*/

//Example-5
 function scope(){
     if(true){
     var a='This is funtional scope'
     let b="this is block scope"
     }
     console.log(a)
     console.log(b)

 }
 scope()

 /*output:
 This is functional scope
 ReferenceError: b is not defined
 */


 


