"use client"

import { Dispatch, SetStateAction, createContext } from "react";
import { useState , useContext } from "react";

interface ModeType{
    gameMode : string
    setGameMode : Dispatch<SetStateAction<string>>
}
const ModeContext = createContext<ModeType>({
    gameMode : "Basic",
    setGameMode : () => {}
})

export const ModeTypeProvider = ({children} : {children : React.ReactNode}) => {
    const game_mode = localStorage.getItem("gameState")
    const [gameMode,setGameMode] = useState(game_mode !== null ? JSON.parse(game_mode) : "Basic")

    return(
        <ModeContext.Provider value={{gameMode,setGameMode}}>
            {children}
        </ModeContext.Provider>
    )
}

export const useModeContext = () => useContext(ModeContext)