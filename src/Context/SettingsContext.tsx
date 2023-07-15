"use client"
import { useState , useContext} from "react";
import { Dispatch, SetStateAction, createContext } from "react";


interface SettingsType{
    showSettings : boolean
    setShowSettings : Dispatch<SetStateAction<boolean>>
}
const SettingsContext = createContext<SettingsType>({
    showSettings : false,
    setShowSettings : () => {}
})

export const SettingsContextProvider = ({children} : {children : React.ReactNode}) => {
    const [showSettings,setShowSettings] = useState(false)

    return(
        <SettingsContext.Provider value={{showSettings,setShowSettings}}>
            {children}
        </SettingsContext.Provider>
    )
}

export const useSettingsContext = () => useContext(SettingsContext)