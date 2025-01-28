export const saveGameToStorage=({board, turn}) =>{
    //guardar partida en memoria del navegador (solo recibe string, el JSON espara convertirlo a string)
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () =>{
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')  
}