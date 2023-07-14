"use client"
import { Dispatch, SetStateAction, createContext } from "react"

export interface ShowType{
    showRules : boolean
    setShowRules : Dispatch<SetStateAction<boolean>>
}
 export const RulesContext = createContext<ShowType>({
    showRules : false,
    setShowRules : () => {}
 });