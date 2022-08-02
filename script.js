
function computer()
{
    var x =  Math.floor(Math.random()*100+1);

    if(x >= 1 && x<25)
    {
        x = 1; //stone
    }
    else if(x >= 25 && x < 50)
    {
        x = 2; //paper
    }
    else if(x >= 50 && x <= 75)
    {
        x = 3; //pencil
    }
    else
    {
        x = 4; //scissor
    }

    return x;
}

var playerVar = null;
var computerVar = null;

//1 == Stone && 2 == Paper && 3 == Pencil && 4 == Scissor

document.querySelector("#stone").addEventListener('click',(e)=>{
    playerVar = 1;
    document.querySelector("#player-item").src = "stone.png";
});
document.querySelector("#paper").addEventListener('click',(e)=>{
    playerVar = 2;
    document.querySelector("#player-item").src = "paper.png";
});
document.querySelector("#pencil").addEventListener('click',(e)=>{
    playerVar = 3;
    document.querySelector("#player-item").src = "pencil.png";
});
document.querySelector("#scissor").addEventListener('click',(e)=>{
    playerVar = 4;
    document.querySelector("#player-item").src = "scissor.png";
});


document.querySelector(".play-button").addEventListener('click',()=>{

    computerVar = computer();

    if(computerVar == 1)
    {
        document.querySelector("#computer-item").src = "stone.png";

    }
    else if(computerVar == 2)
    {
        document.querySelector("#computer-item").src = "paper.png";

    }
    else if(computerVar == 3)
    {
        document.querySelector("#computer-item").src = "pencil.png";

    }
    else
    {
        document.querySelector("#computer-item").src = "scissor.png";
    }

    let result = battel(playerVar,computerVar);

    console.log(result);

    if(result == "Player Wins")
    {
        document.querySelector("#flag").src = "winner.png";
    }
    else if(result == "Player Lose")
    {
        document.querySelector("#flag").src = "losser.png";
    }
    else if(result == "Tie")
    {
        document.querySelector("#flag").src = "tie.png";
    }


});

function battel(p,c)
{

    if(p == 1)
    {
        console.log("Player has "+p + " and computer has "+c);
        if(c == 3)
        {
            return "Player Wins";
        }
        else if(c == 4)
        {
            return "Player Wins";
        }
        else if(c == 1)
        {
            return "Tie";
        }
        else
        {
            return "Player Lose";
        }
    }
    else if(p == 2)
    {
        console.log("Player has "+p + " and computer has "+c);
        if(c == 1)
        {
            return "Player Wins";
        }
        else if(c == 2)
        {
            return "Tie";
        }
        else
        {
            return "Player Lose";
        }
    }
    else if(p == 3)
    {
        console.log("Player has "+p + " and computer has "+c);
        if(c == 2)
        {
            return "Player Wins";
        }
        else if(c == 3)
        {
            return "Tie";
        }
        else
        {
            return "Player Lose";
        }
    }
    else
    {
        console.log("Player has "+p + " and computer has "+c);   
        if(c == 3)
        {
            return "Player Wins";
        }
        else if(c == 2)
        {
            return "Player Wins";
        }
        else if(c == 4)
        {
            return "Tie";
        }
        else
        {
            return "Player Lose";
        }
    }

}





  //1 == Stone && 2 == Paper && 3 == Pencil && 4 == Scissor

    // 1 > 3
    // 1 > 4

    // 2 > 1

    // 3 > 2

    // 4 > 3
    // 4 > 2