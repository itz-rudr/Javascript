let box=document.querySelectorAll(".cell")
let resetBtn=document.querySelector("#reset")
let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[1,4,8],[2,4,6]]
let turn0=true
for(let a of box){
    a.addEventListener("click",()=>{
        if(a.innerText !== "") return;
        if(turn0){
            a.innerText="0";
            turn0=false;
        }else{
            a.innerText="X";
            turn0=true;
        }
    })
    checkWinner();
}
 function checkWinner(){
    for(let pattern of win){
        let x =  box[pattern[0]].innerText
        let y  =  box[pattern[1]].innerText
        let z  =  box[pattern[2]].innerText
        if(x!="" && y!="" && z!=""){
            if(x==y && y==z){
                msgBox.innerText=  x+"aap jeet gayee hehehe"
                console.log("kyaaaaaaaaaaaa");
            
                }
            }
        }
}