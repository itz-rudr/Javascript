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
 * 
 * Mini Challenge 1-->
 * A 
 * C 
 * E 
 * D 
 * B 
 * This happens because of the working of javascript is based on stack and queue structure
 * callback for d enters the Queue first cause it finishes its time first
 * 
 * Mini challenge 2-->
 * output-->
 * 1
 * 4
 * 5
 * 2
 * 3
 * 2-->
 * 2 callback executes first as it comes first in callback Queue it happens because it goes firstly into the browser and
 * comes first into the queue
 * Queue ordering tells about which code block will be executed first
 * yess timer completion order matters because it tell which execution block is being transferred to callback queue
 * 
 * Mini challenge 3-->
 * output-->
 * Start
 * End
 * A 
 * B 
 *2.-> B excecutes last as each setTimeout function is inside one another and each is considered as sepaerate block 
 *3.-> Second time enter callback queue after the first time as it is inside It
 *4.-> B enter the callback Queue after the first Timeout
 *5.-> Start -> call stack -> executed -> setTimeout(A) -> Enters web API -> A -> enters callback queue -> SetTimeout(B)
 *    -> enters web API -> B -> enters callback Queue -> End -> enters Call stack -> executed -> event loop checks ->
 *    checks call stack is empty -> callback queue is executed
 */