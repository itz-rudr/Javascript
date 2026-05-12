//callback Practice
//Task 1 -->
function calculate(a,b,operation){
    return operation(a,b);
}
console.log(calculate(2,3,(x,y)=>x+y));
//Task 2 -->
/**
 * functions can be passed like variables cause functions returns a value which can be 
 * passed as a reference or as an argument
 */
//Practice
//Task 1-->
//output--> 2
//Task 2-->
let mul = calculate(2,3,(x,y)=>x*y)
console.log(mul);
/**Task 3->
 * first is a function decleration or a identifier used to identify a variables
 * or a function while is greet() is a function calling i.e a function is being called here
 */
console.log("Start");
setTimeout(()=>{
    console.log("Inside Timeout");
},2000);
console.log("End");
/*
 Mini practice Questions
 Task 1-->
 A 
 C
 B
 Task 2-->
 Start
 End
 Timeout
 Task 3-->
 Second
 First
 */
/**
 * Output:--
 * Start
 * End
 * Inside Timeout
 * 
 * It happens because in async javascript it runs code from top to bottom and if it founds a block taking time then it transfers it to
 * browser and after it has finished execution the browser sends it to callback Queue and then the code is executed 
 * 
 * in SetTimeout function the code runs after a certain amount of time which is fixed by the developer
 */