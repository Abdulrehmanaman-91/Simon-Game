let gameseq = [];
let userseq = [];
let highscore = [];

let btns = ["yellow","red","green","blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function()
{
    if(started == false){
    console.log("game is started");
    started = true;

    levelUp();
}
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
};

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
};

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`

    let randIdx = Math.floor(Math.random() * 4);
    let randomcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randomcolor}`);
    // console.log(randIdx);
    // console.log(randbtn);
    // console.log(ranrdomcolor);
    gameseq.push(randomcolor);
    console.log(gameseq);
    btnflash(randbtn);

}
function checkbtn(idx){
    // console.log("curr level",level);
    // let idx = level-1;
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000)
        }
        console.log("same value")
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level} </b> <br> Press any key to start`
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor= "white"
        },150)
        reset();
    }

}

function btnpress(){

    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkbtn(userseq.length-1);
}

let allBtns = document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    level = 0;
    started= false;
    gameseq = [];
    userseq = [];

}
