let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.getElementById('list');

btn.addEventListener("click",()=>{
    let data = input.value

    fetch(`https://api.tvmaze.com/search/shows?q=${data}`).
    then((info)=>{
        return info.json()
    }).then((val)=>{
        console.log(val)
        console.log(val[0].show.image.orginal);
        show(val)
    })
})
function show(val){
    for(let i in val){
    let img=document.createElement("img")
    img.setAttribute("src",val[i].show.image.original)
    list.appendChild(img)
   }
}