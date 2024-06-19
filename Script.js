let choices =document.querySelectorAll(".choice");
let userscore=document.querySelector("#user-score");
let compscore=document.querySelector("#Comp-score");
let msg=document.querySelector("#msg");

let usernum=0;
let compnum=0;



choices.forEach((user_choice)=>{
    const btn=user_choice.getAttribute("id");
    user_choice.addEventListener("click",()=>{
       playgame(btn);

    })

})

const draw=()=>{
    msg.innerText=`Draw! Play Again`;
    msg.style.backgroundColor="#081b31";
}


const showwinner=(userwin,box,comp_choice)=>{
    if(userwin)
    {
        usernum++;
        userscore.innerText=usernum;
        msg.innerText=`You win ${box} beats ${comp_choice}`;
        msg.style.backgroundColor="Green";

    }
    else{
        compnum++;
        compscore.innerText=compnum;
        msg.innerText=`You Lose ${comp_choice} beats ${box}`;
        msg.style.backgroundColor="Red";
    }

}


const playgame=(box)=>{
     const comp_choice=compchoice();
    
     if(box==comp_choice)
     {
        draw();
    }
     else{
        let userwin=true;
        if(box==="rock")
        {
            userwin= comp_choice==="paper" ? false : true;
        }
        else if(box==="paper")
        {
            userwin= comp_choice==="rock" ? true :false;
        }
        else{
            userwin=comp_choice ==="paper" ? true :false;
        }
        showwinner(userwin,box,comp_choice);
     }

};


const compchoice=()=>{
        const option=["rock","paper","scissor"];
        const index=Math.floor(Math.random() * 3); 
        return option[index];

};