"use client"
import { useState , useContext} from "react"
import { Dispatch, SetStateAction, createContext } from "react"

interface ShowType{
    showRules : boolean
    setShowRules : Dispatch<SetStateAction<boolean>>
}
 const RulesContext = createContext<ShowType>({
    showRules : false,
    setShowRules : () => {}
 });

  export const RulesContextProvider = ({children} : {children : React.ReactNode}) => {
    const [showRules,setShowRules] = useState(false)
    return(
        <RulesContext.Provider value={{showRules,setShowRules}}>
            {children}
        </RulesContext.Provider>
    )
  }
 
export const useRulesContext = () => useContext(RulesContext)