//Exercise-1
//Whay the value of x is remaining unchanged in global scope
var x=10;
function myFunc()
{
   var x=20 
    console.log(x)
}

myFunc()
console.log(x)

//Exercise-2
//Why it is showing this output
function myFunc()
{
    const y=10;
    y=20 
    console.log(y)
}

myFunc()
console.log(y)

 //Exercise-3
 //Before running the code think what will be the output and then run it and tell why it has shown this output
let str1 = 'Hello';
function greet() {
    let str2 = 'World';
    console.log(str1+ ' ' + str2);
    if (str2== 'World') {
        let str3= 'hello';

        console.log(str1 + ' ' + str2 + ' ' + str3);
    }
   console.log(str1 + ' ' + str2 + ' ' + str3);
}
greet();

//Exercise-4
//Before running the code think what will be the output and then run it and tell why it has shown this output
if (true) {
	const foo = "foo";
	console.log(foo); 

	if (true) {
		const bar = "bar";
		console.log(foo,bar);

		if (true) {
            const hello = "hello";
			console.log(foo, bar,hello); 
		}
      console.log(foo, bar,hello); 
	}
}

//Exercise-5
//Before running the code think what will be the output and then run it and tell why it has shown this output
function run() {
    const two = 2;
    let count = 0;
    function run2(){}
    console.log(two);  
    console.log(count); 
    console.log(run2);
  }
  run();
  console.log(two);   
  console.log(count); 
  console.log(run2); 
