let gameSeq=[];
let UserSeq=[];
let btns=["red","yellow","green","blue"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
    }
    levelUp();
});


function gameFlash(btn){ 
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btna){ 
    btna.classList.add("userflash");
    setTimeout(function(){
        btna.classList.remove("userflash");
    },250);
}

function levelUp(){
    UserSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randindx=Math.floor(Math.random()*btns.length);
    let randColor=btns[randindx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randindx);
    // console.log(randColor);
    // console.log(randBtn);
    gameFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}

function checkValue(idx){
    if(gameSeq[idx]===UserSeq[idx]){
        if(UserSeq.length==gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerHTML=`Game Over! <br> <b>Your score is ${level} </b> <br> press any key to restart the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function press(){
    let btn=this;
    userFlash(btn);

    let color=btn.getAttribute("id");
    UserSeq.push(color);
    checkValue(UserSeq.length-1);
}

let bt=document.querySelectorAll(".box");
for(bta of bt){
    bta.addEventListener("click",press);
}

function reset(){
    level=0;
    UserSeq=[];
    gameSeq=[];
    started=false;
}