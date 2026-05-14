const arr=[
    'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]
const imgEl = document.querySelector('img');
let num=0;
setInterval(function(){
    imgEl.setAttribute('src',arr[num]);
    num=(num+1)%arr.length;
},1000)
function step1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Selected")
            resolve()
        },5000)
    })
}
function step2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Filter")
            resolve()
        },4000)
    })
}
function step3(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Captions")
            resolve()
        },3000)
    })
}
function step4(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Posted")
            resolve()
        },2000)
    })
}

// Promise chain version of the commented callback flow:
// step1()
//   .then(step2)
//   .then(step3)
//   .then(step4)
//   .catch((err)=>{
//       console.error(err)
//   })

// Optional async/await version:
// async function runSteps() {
//     try {
//         await step1()
//         await step2()
//         await step3()
//         await step4()
//     } catch (err) {
//         console.error(err)
//     }
// }
// runSteps()
async function call() {
    await step1();
    await step2();
}
call();
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((data) => data.json())
  .then((val) => {
      console.log(val);
      if (Array.isArray(val)) {
          val.forEach(item => console.log(item.title));
      } else if (val && typeof val === 'object') {
          console.log(val.title);
      }
  })
  .catch((err) => {
      console.log(err);
  })