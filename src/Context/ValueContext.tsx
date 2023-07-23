"use client"
import { Dispatch,SetStateAction, createContext, useContext, useState } from "react"

interface ValueType{
    value : number
    setValue : Dispatch<SetStateAction<number>>
}

const ValueContext = createContext<ValueType>({
    value : 0,
    setValue : () => {}
})

export const ValueContextProvider = ({children}:{children:React.ReactNode}) => {
    const [value,setValue] = useState(0)
    return(
        <ValueContext.Provider value = {{value,setValue}}>
            {children}
        </ValueContext.Provider>
    )
}
export const useValueContext = () => useContext(ValueContext)