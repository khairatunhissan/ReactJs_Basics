//Example-1

//Polyfilling in case of map
//Before polyfilling
const arr = [1,2,3,4];
const newArr = arr.map(elem => {
    return elem * 2
});
console.log(newArr);

//Output: [2, 4, 6, 8]

//polyfill implementation
Array.prototype.pMap = function(callback) {
  let res = [];
     for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i], i, this));
    }
    return res;
  }

//Example-2
//Polyfilling in case of forEach
//Before polyfill
let arr1 = [1,2,3,4,5];
arr1.forEach(function(word) {
  console.log(word);
 });
/*output:
1
2
3
4
5*/

//polyfill implementation
Array.prototype.pForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
   callback(this[i], i, this);
 }
}


//Example-3

//polyfilling in case of filter
//before polyfill
const arr2 = [1,2,3,4]
const result = arr2.filter(elem => elem < 3);
console.log(result);

//output: [ 1, 2 ]

//polyfill implementation
Array.prototype.pFilter = function(callback) {
  let res = [];
   for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
        res.push(this[i]);
    }
  }
  return res;
}

//Example-4

//polyfilling in case of indexOf
//before polyfill
let arr4 = [1,2,3,4,1];
let result4 = arr4.indexOf(1, 1); 
console.log(result4)
//output: 4

//polyfill implementation
Array.prototype.pIndexOf = function(search, start) { 
  for (let i = (start || 0); i < this.length; i++) { 
    if (this[i] === search) { return i; } } 
  return -1; 
}

//Example-5

//Arrow function compiling
const getProfile = username => {
  console.log(username)
}
getProfile('John')

//output:John

//After compiling
//getProfile will remail getProfile not getprofile1
var getProfile1 = function getProfile(username) {
  console.log(username)

}

