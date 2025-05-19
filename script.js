let btn=document.querySelectorAll(".box");
let container=document.querySelector(".container");
let msg=document.querySelector("#msg");
let newGame=document.querySelector("#new_game");
let msg_container=document.querySelector(".msg_container")
let strtbtn=document.querySelector("#strtbtn");
let restbtn=document.querySelector("#resetbtn");
let plrTurn=document.querySelector("#plrTurn");
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
strtbtn.addEventListener("click",start());
newGame.addEventListener("click",startAgain());
restbtn.addEventListener("click",()=>{
    curentPlayer=true;
    for(let box of btn){
        box.disabled=false;
        box.innerText="";
    }
})
function startAgain(){
newGame.addEventListener("click",()=>{
    // curentPlayer=true;
    // for(let box of btn){
    //     box.disabled=false;
    //     box.innerText="";
    // }
    // msg_container.classList.add("hide");
    start();
})
}
function start(){
    plrTurn.innerText="Player X Turn!";
btn.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(curentPlayer){
        plrTurn.innerText="Player O Turn!";
        box.innerText="X";
        curentPlayer=false;
        box.disabled=true;
       }
       else{
        plrTurn.innerText="Player X Turn!";
        box.innerText="O";
        curentPlayer=true;
        box.disabled=true;
       }
        winFunction();
    })
})
}
function showMsg(evnt){
    msg.innerHTML=`Congratulations winner is ${evnt}`;
    msg_container.classList.remove("hide");
    for(let box of btn){
        box.disabled=true;
    }
    plrTurn.style.display="none";
}
function winFunction(){
    for(let p of winingCondition){
        let position1=btn[p[0]].innerText;
        let position2=btn[p[1]].innerText;
        let position3=btn[p[2]].innerText;
        if(position1!=="" && position2!==""&& position3!==""){
            if(position1==position2&&position2==position3){
                showMsg(position1);
            }
        }
    }
}
