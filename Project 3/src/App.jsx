import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"

import { WINNING_COMBINATIONS } from './winning-combinations'
import GameOver from "./components/GameOver";

const PLAYERS = {
	X : "Player 1",
	O : "Player 2"
}

const INITIAL_BOARD = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
];

function getActivePlayer(gameTurns) {
	let currentPlayer = 'X';
	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currentPlayer = 'O';
	}
	return currentPlayer;
}

function getWinner(board, playerNames){
	let winner ;

	for(let combination of WINNING_COMBINATIONS){
		const firstSymbol = board[combination[0].row][combination[0].column] ;
		const secondSymbol = board[combination[1].row][combination[1].column] ;
		const thirdSymbol = board[combination[2].row][combination[2].column] ;

		if(firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol){
			winner = playerNames[firstSymbol] ;
		}
	}
	return winner ;
}

function App() {
	// const [activePlayer, setActivePlayer] = useState('X') ; // remove this, make derive state from gameTurns
	const [gameTurns, setGameTurns] = useState([]);
	const [playerNames, setPlayerNames] = useState(PLAYERS) ;

	// create a deep copy
	// When the state variable is mutable, always craete a deep copy
	let board = [...INITIAL_BOARD.map((array) => [...array])];

	for (let turn of gameTurns) {
		let { square, player } = { ...turn };
		let { row, col } = { ...square };
		board[row][col] = player;
	}

	// get current active player using derive state from gameTurns
	let activePlayer = getActivePlayer(gameTurns);

	let winner = getWinner(board, playerNames) ;

	const hasDraw = gameTurns.length == 9 && !winner ;
	
	function handleBoxSelect(rowIdx, colIdx) {
		// setActivePlayer((prevPlayer) => prevPlayer === 'X' ? '0' : 'X') ;

		setGameTurns((prevTurns) => {

			let currentPlayer = getActivePlayer(prevTurns);

			const updatedTurns = [{
				square: {
					row: rowIdx,
					col: colIdx
				},
				player: currentPlayer
			}, ...prevTurns];

			return updatedTurns;
		});
	}

	function handleRestart(){
		setGameTurns([]) ;
	}

	function handlePlayerNameChange(symbol, newName){
		setPlayerNames((prevNames) => {
			return {
				...prevNames,
				[symbol] : newName
			} ;
		}) ;
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player name={PLAYERS.X} symbol={"X"} isActive={activePlayer === 'X'} 
						onNameChange={handlePlayerNameChange} />
					<Player name={PLAYERS.O} symbol={"O"} isActive={activePlayer === 'O'} 
						onNameChange={handlePlayerNameChange} />
				</ol>
				{(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRestart}/>}
				<GameBoard
					onBoxSelect={handleBoxSelect}
					board={board} />
			</div>
		</main>
	)
}

export default App
