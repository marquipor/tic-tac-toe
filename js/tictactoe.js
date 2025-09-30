const players=["X","O"];
const CELL_COUNT = 9;
let turn = 0;
let activePlayer=players[0]
let winner=false;
let victoriesX=0;
let victoriesO=0;
let draws=0;

function showActivePlayer(){
    
   if(activePlayer===players[0]) document.getElementById("activePlayerMessage").style.color="lightblue";
   else document.getElementById("activePlayerMessage").style.color="lightgreen";

    document.getElementById("activePlayerMessage").innerHTML="Turno del jugador "+ activePlayer;
}

function markCell(cell){
    if(cell.innerHTML=== "" && !winner){
        
        if(activePlayer===players[0]) cell.style.color="lightblue";
        else cell.style.color="lightgreen";

        cell.innerHTML=activePlayer;
        turn++;
        
        if(turn>=5) checkWinner();

        if(!winner) switchPlayer();

    } else{
        alert(winner ? "El juego ha terminado, reinicia para jugar de nuevo" : "Esta celda ya está ocupada, elige otra");
    }

}

function switchPlayer(){

     activePlayer=(activePlayer===players[0]? players[1]:players[0]);
     showActivePlayer();
}

function checkWinner(){
    let cells = [];
    for(let i=0; i<CELL_COUNT; i++){
        cells.push(document.getElementById("cell" + i).innerHTML);
    }

    if((cells[0]===cells[1] && cells[1]===cells[2] && cells[0]!=="") ||
    (cells[3]===cells[4] && cells[4]===cells[5]   && cells[3]!=="") ||
    (cells[6]===cells[7] && cells[7]===cells[8]   && cells[6]!=="") ||
    (cells[0]===cells[3] && cells[3]===cells[6]   && cells[0]!=="") ||
    (cells[1]===cells[4] && cells[4]===cells[7]   && cells[1]!=="") ||
    (cells[2]===cells[5] && cells[5]===cells[8]   && cells[2]!=="") ||
    (cells[0]===cells[4] && cells[4]===cells[8]   && cells[0]!=="") ||
    (cells[2]===cells[4] && cells[4]===cells[6]   && cells[2]!=="") ){

        alert("Ganador: " + activePlayer);

        winner = true;
        
        updateScoreboard(activePlayer);

    } else if(turn===9){
        alert("¡Empate!");

        updateScoreboard(null);

}

}


function updateScoreboard(player){
    
    if(player==="X") victoriesX++;
    else if(player==="O") victoriesO++;
    else draws++;

    document.getElementById("scoreX").innerHTML=victoriesX;
    document.getElementById("scoreO").innerHTML=victoriesO;
    document.getElementById("scoreDraws").innerHTML=draws;
}

function nextTurn(){
    turn=0;
    winner=false;
    activePlayer=players[0];
    showActivePlayer();
    for(let i=0;i<CELL_COUNT;i++){
        document.getElementById("cell"+i).innerHTML="";
    }
}

function resetGameAndScoreboard(){
    nextTurn();
    victoriesX=0;
    victoriesO=0;
    draws=0;
    document.getElementById("scoreX").innerHTML=victoriesX;
    document.getElementById("scoreO").innerHTML=victoriesO;
    document.getElementById("scoreDraws").innerHTML=draws;
}

showActivePlayer();
