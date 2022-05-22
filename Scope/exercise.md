# Exercise-1
কেন x এর value এইখানে unchanged global scope এ
```javascript
var x=10;
function myFunc()
{
   var x=20 
    console.log(x)
}

myFunc()
console.log(x)
```

# Exercise-2
কেন এমন আউটপুট দেখাছে
```javascript
function myFunc()
{
    const y=10;
    y=20 
    console.log(y)
}

myFunc()
console.log(y)
```
# Exercise-3
কোড চালানোর আগে চিন্তা করুন আউটপুট কি হবে এবং তারপর রান করুন এবং বলুন কেন এটি এই আউটপুট দেখাচ্ছে
```javascript
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
```
# Exercise-4
কোড চালানোর আগে চিন্তা করুন আউটপুট কি হবে এবং তারপর রান করুন এবং বলুন কেন এটি এই আউটপুট দেখাচ্ছে
```javascript
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
```
# Exercise-5
কোড চালানোর আগে চিন্তা করুন আউটপুট কি হবে এবং তারপর রান করুন এবং বলুন কেন এটি এই আউটপুট দেখাচ্ছে
```javascript
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
```