let userscore=0;
let computerscore=0;
const userwin=document.getElementById("user_span");
const computerwin=document.getElementById("comp_span");
const result=document.getElementById("result");
const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissor=document.querySelector(".scissor");

function computerInput(){
    const values=['r','p','s'];
    const Inputs= Math.floor(Math.random()*3);
    return values[Inputs]; 
}

function letterconv(letter){
    if(letter==='r') return r="rock";
    if(letter==='s') return s="sissor"
    if(letter==='p') return p="paper"
}

function win(userchoice,cinput){
    userscore++;
    userwin.innerHTML=userscore;
    result.innerHTML= letterconv(userchoice) + " beats "+ letterconv(cinput)+" ! you win";
}
function lose(userchoice,cinput){
    computerscore++;
    computerwin.innerHTML=computerscore;
    result.innerHTML= letterconv(userchoice) + " defeted by "+ letterconv(cinput)+" ! you lose" ;
}
function draw(userchoice,cinput){
    result.innerHTML= letterconv(userchoice) + " draws with "+ letterconv(cinput)+" oops! its a draw" ;
}



function game(userchoice){
    const cinput=computerInput();
    console.log("compchoice  " +cinput);
    console.log("userChoice  " +userchoice);
    switch(userchoice+cinput){
        case'rs':
        case 'sp':
        case 'pr':
            console.log("Win");
            win(userchoice,cinput);
            break;
        case 'sr':
        case 'ps':
        case 'rp':
            console.log('lost')
            lose(userchoice,cinput);
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            console.log("draw");
            draw(userchoice,cinput)

    }
}

function main(){
    rock.addEventListener("click",()=>{
        game('r');
    })
    paper.addEventListener("click",()=>{
        game('p')
    })
    scissor.addEventListener("click",()=>{
        game('s')
    })
}
main();
