"use client"

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

interface GameType{
    game : string
    setGame : Dispatch<SetStateAction<string>>
}
const GameContext = createContext<GameType>({
    game : "",
    setGame : () => {}
})
export const GameProvider = ({children} : {children : React.ReactNode}) => {
    const [game,setGame] = useState("")
    return(
        <GameContext.Provider value={{game,setGame}}>
            {children}
        </GameContext.Provider>
    )
}
export const  useGameContext = () => useContext(GameContext)