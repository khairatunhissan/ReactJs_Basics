# Example-1
```javascript
let x = 10;

function timesTen(a){
    return a * 10;
}

let y = timesTen(x);

console.log(y);
```
output=100

# Example-2 
```javascript
function a() {  
  console.log('It is the first function');  
function b() {  
  console.log('It is the second function');  
}  
b();  
}  
a();  
console.log('It is GEC');
```

output: 

It is the first function

It is the second function

It is GEC

# Example-3
```javascript
function first() { 
    setTimeout(() => {
        console.log('It is the first function'); 
    }, 3000); 
   
function second() {  
  console.log('It is the second function');  
}  
second();  
}  
first();  
console.log('It is GEC'); 
```

output:

It is the second function

It is GEC

It is the first function

# Example-4
```javascript
let a = 20;
const b = 30;
var mul;
function multiply(e, f) {
 var g = 20;
 return e * f * g;
}
mul = multiply(a, b);
console.log(mul)
```
output:  12000

# Example-5
```javascript
console.log('Global Execution context')

function fn1(){
    setTimeout(()=>{
        console.log('Inside function fn1 with the SetTimeout of 3 seconds')
    },3000)
}
setTimeout(()=>{
    console.log('Inside the Global Execution context With SetTimeout of 10 seconds')
},10000)

function fn2(){
    console.log('inside function fn2')
}

function fn3(){

    setTimeout(()=>{
        console.log('Inside function fn3 with the SetTimeout of 3 seconds')
    },3000)
}

fn1()
fn2()
fn3()

console.log('Last line Output of Global Execution Context')
```

output:

Global Execution context

inside function fn2

Last line Output of Global Execution Context

Inside function fn1 with the SetTimeout of 3 seconds

Inside function fn3 with the SetTimeout of 3 seconds


# Example-6
```javascript
function f1(){
    console.log('Inside f1')
    function f2(){
        setTimeout(()=>{
            console.log('Inside f2')
        },3000)
         
        function f3(){
            console.log('Inside f3')
           
        }
        f3()
    }
    function f4(){
        console.log('Inside f4')
    }
setTimeout(()=>{
    console.log('Done execution')
},5000)
f2()
f4()

}
f1()
console.log('Global context')
```

output:

Inside f1

Inside f3

Inside f4

Global context

Inside f2

Done execution