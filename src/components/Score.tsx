import { useModeContext } from "@/Context/ModeContext"
import { useContext, useEffect, useState } from "react"
import Image from "next/image"
import { useValueContext } from "@/Context/ValueContext"
import { useScoreContext } from "@/Context/ScoreContext"
export default function Score(){
    const {gameMode} = useModeContext()
    const {value} = useValueContext()
    const {proScore,basicScore,setBasicScore,setProScore} = useScoreContext()
    useEffect(() => {
        const timerId = setTimeout(() => {
            if(value === 1 && gameMode === "Basic"){
                setBasicScore((prev) => prev + 1)
            }
            else if (value === 1 && gameMode !== "Basic"){
                setProScore((prev) => prev + 1)
            
            }
      
        }, 3000)
        return () => clearTimeout(timerId)
    },[value])

    useEffect(() => {
      localStorage.setItem("basic_score",JSON.stringify(basicScore))
      localStorage.setItem("pro_score",JSON.stringify(proScore))
    },[basicScore,proScore])

    useEffect(() => {
        localStorage.setItem("gameState",JSON.stringify(gameMode))
    },[gameMode])
    return(
        <section className="flex justify-between border-4 border-[#606E85] w-5/6 lg:w-[52rem] mx-auto items-center py-3 rounded-lg">
            <Image 
            src = {gameMode === "Basic" ? "/images/logo.svg" : "/images/logo-bonus.svg"} 
            className="ml-4 lg:w-32" 
            width={95}
            height={95}
            alt="logo"/>
             
            <div className="bg-white py-2.5 px-6 rounded-md mr-4">
                <p className="text-center text-[#2A46C0] tracking-[0.2em] text-[12px] mb-1 font-semibold lg:text-[14px]">SCORE</p>
                <p className="text-center text-[#3B4363] text-5xl font-barlow1">{gameMode === "Basic" ? basicScore : proScore}</p>
            </div>
        </section>
    )
}