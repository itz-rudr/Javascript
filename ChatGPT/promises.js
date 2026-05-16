/**
 * 
 * Promises is a good name for it cause it literal meaning is something that we are going to do in future
 * which can either be true or false i.e we may suceed in fulfilling the promise or fail to do so 
 * i Think that is why async operations are called promises because of their functionality and how they
 * function exactly like Promises made between two people 
 * 
 * promise--> it is an object representing a future failure or future success
 * syntax--> const promise= new promise((resolve,reject)=>{
 *                  logic
 * });
 *  promises states --> Fulfilled -> reject,resolved 
 *                      reject<-->resolved X X X 
 * resolve and reject are functions provided by javascript internally
 * resolve()--> means an operation succeeded
 * reject()--> means operation failed
 * 
 */
const myPromise = new Promise((resolve,reject)=>{
    resolve("Succees");
});
/**
 * Promise object creation is synchronous
 * they are used to manage async operations
 * .then() is used to convey a promise
 */
myPromise.then((data)=>{
    console.log(data);
});
/**
 * .then()--> means when promise succeeds, run this callback, callback is excecutes LATER not immediately
 * 
 * Mini challenge-->
 * output -->
 * Start
 * Inside Promise
 * Promise Resolved
 * End
 * 
 * 2. --> Inside Promise is executed immediately as it is inside an object and when and object is created it executes it 
 * 3. --> .then() is executed later as it is an asynchronus operation and firstly goes into the call back queue
 * 4. --> creation of promise object is synchronous
 * 5. --> calling of .then() is asynchronous 
 *
 */