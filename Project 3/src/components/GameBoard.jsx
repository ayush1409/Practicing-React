export default function GameBoard({onBoxSelect, board}){
    // const [board, setBoard] = useState(intialBoard) ;

    // function handleButtonClick(rowIdx, colIdx){
    //     if(!board[rowIdx][colIdx]){
    //         setBoard((prevBoard) => {
    //             // prevBoard[rowIdx][colIdx] = 'X' // not recommended, can create bugs
    
    //             // When the state object is mutable, create a deep copy first before updating the state
    //             // this will avoid the bugs
    //             const updateBoard = [...prevBoard.map((arrayRow => [...arrayRow]))] ;
    //             updateBoard[rowIdx][colIdx] = playerSymbol ;
    //             return updateBoard ;
    //         }) ;

    //         onBoxSelect() ;
    //     }
    // }

    return <>
        <ol id="game-board">
            {board.map((row, rowIdx) => <li key={rowIdx}>
                <ol>
                    {row.map((playerSymbol, colIdx) => 
                        <li key={colIdx}>
                            <button onClick={() => onBoxSelect(rowIdx, colIdx)}
                                disabled={playerSymbol !== null}>
                                {playerSymbol}
                            </button>
                        </li>)}
                </ol>
            </li>)}
        </ol>
    </>
}