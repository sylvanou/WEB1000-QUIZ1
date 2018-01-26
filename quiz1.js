/*1. Write a **recursive** function
 which receives an array and returns
  the sum of the elements of the array. */
// A.
function sumArr(arr){
    if(arr.length < 1){
        return 0;
    }
    let sum = arr.pop();
    return sum + sumArr(arr);
}

console.log(sumArr([10,3,3,6,2])); // 24

/*2.Given two temperatures, return true
 if one is less than 0 and the other is
  greater than 100.  
    a.	icyHot(120, -1) → true  
    b.	icyHot(-1, 120) → true  
    c.	icyHot(2, 120) → false */
// A.
function icyHot(a, b){
    return (a < 0 && b > 100 || a > 100 && b < 0) ? true : false;
}

console.log(icyHot(120, -1));
console.log(icyHot(-1, 120));
console.log(icyHot(2, 120));

/*3.Given 2 ints, a and b, return true if
 one if them is 10 or if their sum is 10.  
    a.	makes10(9, 10) → true  
    b.	makes10(9, 9) → false  
    c.	makes10(1, 9) → true   */
// A.
function makes10(a, b){
    return (a === 10 || b === 10 || a + b === 10) ? true : false;
}

console.log(makes10(9,10));
console.log(makes10(9,9));
console.log(makes10(1,9));


/*4.Given a string, take the first 2 chars
 and return the string with the 2 chars 
 added at both the front and back, so 
 "kitten" yields"kikittenki". If the string
  length is less than 2, use whatever chars
   are there.  
    a.	front22("kitten") → "kikittenki"  
    b.	front22("Ha") → "HaHaHa"  
    c.	front22("abc") → "ababcab"*/
// A.
function front22(str){
    return (str.length < 2) ? str + str + str : str.substr(0,2) + str + str.substr(0,2);
}

console.log(front22('kitten'));
console.log(front22('H'));
console.log(front22('Ha'));
console.log(front22('abc'));

// *5. Solve https://codility.com/programmers/lessons/3-time_complexity/frog_jmp/
// A.
function frog(x, y, z){
    return Math.ceil((y - x) / z);
}
console.log(frog(10, 85, 30));


// *10.
// A.
// function q10(a){
//     let newArr = a.sort();
//     for(let i = 0; i < a.length; i++){
//         if(i)
//     }
// }
