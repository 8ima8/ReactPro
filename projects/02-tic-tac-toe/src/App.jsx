import { Children, useState } from 'react'
import confetti from 'canvas-confetti'

import {Square} from './components/Square.jsx'
import { TURNS, WINNER_COMBOS } from './constants.js'
import { checkWinnerFrom, checkEndGame} from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'



function App() {
 
  // los usestate siempre deben estar en el cuerpo del componente, nunca en un if o un while
  const [board, setBoard]= useState(() => {
    
    const boardFromStorage = window.localStorage.getItem('board')
    if(boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X // || retorna el que no es false y ?? el primero que no sea null o undefined
  })
  
  const [winner, setWinner] = useState(null) // null es que no hay ganador, false es que no hay empate
  

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null) 
    
    resetGameStorage()

  
  }

  
  
  const updateBoard = (index)=>{

    //si tiene algo la posicion entonces no se actualiza o ya hay un ganador
    if (board[index] || winner) return
    //Actualizar el tablero
    const newBoard = [...board]
    newBoard[index]=turn // x o O
    setBoard(newBoard)
    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //guardar en el storage
    saveGameToStorage({board:newBoard, 
                      turn:newTurn})
    
    
    //revisar ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false) //empate
    }//TODO: revisar cuando el game over

  }

  return (
   <main className='board'>
    <h1>Tic tac toe</h1>
    <h2><button onClick={resetGame}>Empezar de nuevo</button></h2>
    <section className='game'>
      {
        board.map((square , index)=>{
          return (
            <Square 
            key={index}
            index={index}
            updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
        })
      }
    </section>

    <section className='turn'>
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
      </Square> 
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
      
    </section>
      
    <WinnerModal resetGame={resetGame} winner={winner}/>

   </main>
  )
}

export default App
