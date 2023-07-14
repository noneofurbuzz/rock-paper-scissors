"use client"
import { Dispatch, SetStateAction, createContext } from "react";

export interface SettingsType{
    showSettings : boolean
    setShowSettings : Dispatch<SetStateAction<boolean>>
}
export const SettingsContext = createContext<SettingsType>({
    showSettings : false,
    setShowSettings : () => {}
})