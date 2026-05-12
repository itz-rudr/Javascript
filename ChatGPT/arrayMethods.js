/*
to explain for.each 
array.foreach(function(element){
    //logic
});
*/
let marks = [45,67,89,32,76];
marks.forEach((mark) => {
    console.log(mark);
});
/* 
to explain map
array.map(function(element){
    //logic
})
*/
let doubleMarks = marks.map((mark)=>{
    return mark*2;
})
console.log(doubleMarks);
/*
to explain filter()
array.filter(function(element){
    logic
})
*/
let passed = marks.filter((mark) => {
    return mark>=50;
})
console.log(passed);
/*
To explain reduce
array.reduce((accumulator,currentValue)=>{
        return updatedAccumulator;
    },initialValue);
*/
let sum = marks.reduce((total,mark)=>{
    return total+mark;
},0);
console.log(sum);
//Practice Questions
// 1-->
let numbers = [1,2,3,4,5];
// let square = numbers.map((num)=>{
//     return num*num;
// });
// console.log(square);
// 2-->
let greater = numbers.filter((num)=>{
    return num>2;
});
console.log(greater);
// 3-->
let mul = numbers.reduce((product,num)=>{
    return product*num;
},1);
console.log(mul);
// task 1-->
let cube = n => n*n*n;
//task 2-->
let name="Rudra";
let greet=(name)=>{
    let greeting="Hello"+" "+name;
    return greeting;
};
console.log(greet("Rudra"));
// task 3-->
let isEven = n =>  n%2===0 ? true : false;
console.log(isEven(4));
//Practice
// Task 1-->
let isGreater = (a,b) => a>b?a:b;
console.log(isGreater(7,4))
// Task 2-->
let length=(a)=>{
    return a.length;
}
console.log(length("Rudra"));
//Task 3-->
//Arrow functions shall always return a value 
//Final function Practice
//Task 1 -->
const square = n => n*n;
console.log(square(2))
//Task 2-->
let sumArray = (...elements) => elements.reduce((sum,num)=>{
    return sum+num;
},0);
console.log(sumArray(1,2,3,4,5))
//Task 3-->
// Return sends the value and stores it in function name while console.log prints the value in console
/**
 * task 1-->
 * Hello Rudra
 * task 2-->
 * undefined
 * task 3-->
 * it works because an array named numbers is being passed inside map() and it takes each element of it one by one and performs loggic 
 * of num * 2 and returns the array 
 */
