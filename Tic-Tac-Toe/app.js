let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset-button");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn=true;
const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];
const resetGame=()=>{
  turn=true;
enableBoxes();
msgContainer.classList.add("hide");



}
boxes.forEach((box)=>{box.addEventListener("click",function(){ 
    if(turn){
   box.innerText="O";
   turn=false;
    }
    else{
        box.innerText="X"  
        turn=true;
    }
    box.disabled=true;
    checkWinner();
    
 });
});
const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
  }
}
const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

const showWinner=(winner)=>{
  msg.innerText=`congratulation,winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner= function(){
    for(let patterns of winPatterns){
      let pos1=boxes[patterns[0]].innerText;
      let pos2=boxes[patterns[1]].innerText;
      let pos3=boxes[patterns[2]].innerText;
      if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2===pos3){
           
            showWinner(pos1);
        }
      }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



