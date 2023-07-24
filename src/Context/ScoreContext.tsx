"use client"

import { Dispatch, SetStateAction, createContext,useContext,useEffect,useState } from "react"

interface ScoreType{
    basicScore:number
    proScore:number
    setBasicScore : Dispatch<SetStateAction<number>>
    setProScore : Dispatch<SetStateAction<number>>
}
const ScoreContext = createContext<ScoreType>({
    basicScore : 0,
    proScore : 0,
    setBasicScore : () => {},
    setProScore : () => {},
})
export const ScoreProvider = ({children} : {children : React.ReactNode}) => {

    const storedbasicscore = typeof window !== 'undefined' ? localStorage.getItem("basic_score") : undefined
    const storedproscore = typeof window !== 'undefined' ? localStorage.getItem("pro_score") : undefined
    const [basicScore,setBasicScore] = useState(storedbasicscore !== null ? JSON.parse(storedbasicscore!) : 0)
    const [proScore,setProScore] = useState(storedproscore !== null ? JSON.parse(storedproscore!) : 0)

    return(
    <ScoreContext.Provider value = {{basicScore,setBasicScore,proScore,setProScore}}>
        {children}
    </ScoreContext.Provider>
    )
}
export const useScoreContext = () => useContext(ScoreContext)