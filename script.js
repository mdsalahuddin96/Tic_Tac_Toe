let btn=document.querySelectorAll(".box");
let curentPlayer=true;
const winingCondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
btn.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(curentPlayer){
        box.innerText="X";
        curentPlayer=false;
        box.disabled=true;
       }
       else{
        box.innerText="O";
        curentPlayer=true;
        box.disabled=true;
       }
        let win= winFunction();
    })
})

function winFunction(){
    for(let p of winingCondition){
        let position1=btn[p[0]].innerText;
        let position2=btn[p[1]].innerText;
        let position3=btn[p[2]].innerText;
        if(position1!=="" && position2!==""&& position3!==""){
            if(position1==position2&&position2==position3){
                return true;
            }
        }
    }
}
