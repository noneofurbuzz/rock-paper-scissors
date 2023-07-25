"use client"

import { Dispatch, SetStateAction, createContext, useEffect } from "react";
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
    const game_mode = typeof window !== 'undefined' ? localStorage.getItem("gameState") : undefined
    const [gameMode,setGameMode] = useState((game_mode !== null && game_mode !== undefined) ? JSON.parse(game_mode)  : "Basic")
    return(
        <ModeContext.Provider value = {{gameMode,setGameMode}}>
            {children}
        </ModeContext.Provider>
    )
}

export const useModeContext = () => useContext(ModeContext)