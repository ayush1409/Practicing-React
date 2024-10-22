import { useState } from "react";

export default function Player({name, symbol, isActive, onNameChange}){

    const [isEditing, setIsEditing] = useState(false) ;
    const [playerName, setPlayerName] = useState(name) ;

    function handleEditButton(){
        setIsEditing((editing) => !editing) ;
    }

    function handleNameChange(event){
        setPlayerName(event.target.value) ;
        if(isEditing){
            onNameChange(symbol, playerName) ;
        }
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if(isEditing){
        editablePlayerName = <input 
                                type="text" className="player-name"  
                                value={playerName} 
                                onChange={handleNameChange}/>
    }

    return <>
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditButton}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    </>
}