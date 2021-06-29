document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event){
    let square = event.target
    let postion = square.id

    let victory = document.getElementById("ven")

    if(handleMove(postion)){
        setTimeout(()=>{
            // alert("O jogo acabou! parabéns jogador: " + trans(playerTime))
            victory.style.visibility = "visible"
            victory.innerHTML = "Jogador " + trans(playerTime) + " ganhou!"
        }, 20)

        vitoria(playerTime)
    }

    updateSquare(postion)
    let vez = document.getElementById("vez")
    vez.innerHTML = "Vez: " + transf(playerTime)
}

function vitoria(playerTime){
    if(playerTime == 0){
        vitX++
    } else {
        vitO++
    }

    let vitoX = document.getElementById("vitX")
    let vitoO = document.getElementById("vitO")

    vitoX.innerHTML = "Vitorias X: " + vitX
    vitoO.innerHTML = "Vitorias O: " + vitO
}

function trans(player){
    return player==0? 'X' : 'O' 
}

function transf(player){
    return player==0? 'X' : 'O' 
}

function updateSquare(postion){
    let square = document.getElementById(postion.toString())
    let symbol = board[postion]
    square.innerHTML = `<div class='${symbol}'></div>`
}

function restart(){
    updateSquares()
    let victory = document.getElementById("ven")
    victory.style.visibility = "hidden"
    gameOver = false

    partidas++
    let part = document.getElementById('partidas')
    part.innerHTML = "Partidas jogadas: " + partidas
}

function updateSquares(){

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        let postion = square.id
        let symbol = board[postion]
        board[postion] = ''

        if(symbol != ''){
             square.innerHTML = `<div class=''></div>`
        }
    })
}