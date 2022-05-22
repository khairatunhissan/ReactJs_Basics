//Exercise-1
let c = 10;
let a=3;
let b=9;

function timesTen(x,y,z){
    return x+y+z
}

let d = timesTen(c,b,a);

console.log(d);

//Execise-2
let x
function timesTen(a){
     x = 10;
    return a * 10;
}

let y = timesTen(x);

console.log(y);

//why is it showing reference error

//Exercise-3
var z
function timesTen(a){
     z= 10;
    return a * 10;
}

let res = timesTen(z);

console.log(res);
//how can this code give the right answer

//Exercise-4
//Before running the code try to find out what is going to be shown in the console 
function first() { 
    setTimeout(() => {
        console.log('It is the first function'); 
        function second() {  
            console.log('It is the second function');  
          } 
          second()
    }, 3000);  
    function third(){
        console.log('It is the third function')
    } 
    third()
}  
first(); 

console.log('It is GEC'); 

//Exercise-5
//Before running the code try to find out what is going to be shown in the console 
function fn1(a){
    console.log('In fn1')
    return function(){
        console.log(a*a)
        function fn2(){
            console.log('Inside fn2')
        }
        fn2()
        }
    }
let result=fn1(3)
result()

