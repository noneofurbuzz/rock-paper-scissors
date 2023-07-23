import { useGameContext } from "@/Context/GameContext"
import { useModeContext } from "@/Context/ModeContext"
import { useValueContext } from "@/Context/ValueContext"
import Image from "next/image"
import { useEffect, useState } from "react"
export default function GameResult(){

    const {game,setGame} = useGameContext()
    const {gameMode} = useModeContext()
    const [loading,setLoading] = useState(true)
    const [random,setRandom] = useState("")
    const {setValue,value} = useValueContext()

    let comp = Math.floor(Math.random() * (gameMode === "Basic" ? 3 : 5)) 
    let basicGame = ["scissors","paper","rock"]
    let proGame = ["scissors","paper","rock","spock","lizard"]
    useEffect(() => {
        if(gameMode === "Basic"){
            setRandom(basicGame[comp])
        }
        else{
            setRandom(proGame[comp])
        }
    },[gameMode])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        },2000)
        return () => clearTimeout(timer)
    })

    useEffect(() => {
        if(game === "paper" && random === "rock"){
            setValue(1)
        }
        else if(game === "paper" && random === "scissors"){
            setValue(-1)
        }
        else if(game === "paper" && random === "lizard"){
            setValue(-1)
        }
        else if(game === "paper" && random === "spock"){
            setValue(1)
        }
        else if(game === "rock" && random === "scissors"){
            setValue(1)
        }
        else if(game === "rock" && random === "lizard"){
            setValue(1)
        }
        else if(game === "rock" && random === "paper"){
            setValue(-1)
        }
        else if(game === "rock" && random === "spock"){
            setValue(-1)
        }
        else if(game === "scissors" && random === "rock"){
            setValue(-1)
        }
        else if(game === "scissors" && random === "paper"){
            setValue(1)
        }
        else if(game === "scissors" && random === "spock"){
            setValue(-1)
        }
        else if(game === "scissors" && random === "lizard"){
            setValue(1)
        }
        else if(game === "lizard" && random === "spock"){
            setValue(1)
        }
        else if(game === "lizard" && random === "paper"){
            setValue(1)
        }
        else if(game === "lizard" && random === "rock"){
            setValue(-1)
        }
        else if(game === "lizard" && random === "scissors"){
            setValue(-1)
        }
        else if(game === "spock" && random === "paper"){
            setValue(-1)
        }
        else if(game === "spock" && random === "rock"){
            setValue(1)
        }
        else if(game === "spock" && random === "lizard"){
            setValue(-1)
        }
        else if(game === "spock" && random === "scissors"){
            setValue(1)
        }
        else{
            setValue(0)
        }

    })
    return(
        <>
        <section className="pt-20 flex w-full flex-col">
            <div className="flex xs:order-2 w-5/6 lg:w-[52rem] sm:-mt-16 justify-between mx-auto sm:items-center">
            
            <div className={`${(value === 1) ? "shadow-1" : ""} bg-gradient-to-b slide-in ${game === "paper" ? "from-[#4865F4] to-[#5671F5] blue-reflect" : (game === "scissors" ? "from-[#EC9E0E] to-[#ECA922] yellow-reflect" : (game  === "rock" ? "from-[#DC2E4E] to-[#DD405D] red-reflect" : (game === "spock" ? "from-[#40B9CE] to-[#52BED1] cyan-reflect" : "from-[#834FE3] to-[#8C5DE5] purple-reflect")))} rounded-full flex justify-center items-center opacity-95 normal:w-32 normal:h-32 w-28 h-28`}>
            <div className="reflect bg-white rounded-full normal:w-24 normal:h-24 w-20 h-20 flex justify-center items-center">
            <Image 
            src={`/images/icon-${game}.svg`}
            alt={`${game}`}
            width={50}
            height={50}
            className="normal:w-12 normal:h-14 w-10 h-12"/>
            </div>
            </div>
            {(window.innerWidth > 639)&& <div className={`fade-in mx-auto pb-16 pt-16`}>
            <p className="text-white text-5xl text-center mb-4">{value === 0 ? "DRAW" : (value === 1 ? "YOU WIN" : "YOU LOSE")}</p>
            <button onClick = {() => setGame("")} className="bg-white text-[#3B4363] hover:text-[#DC2E4E] active:text-[#DC2E4E] rounded-lg w-48 py-3 tracking-[0.2em]">PLAY AGAIN</button>
            </div>}
            {!loading && <div className={`${(value === -1) ? "shadow-2" : ""} bg-gradient-to-b ${random === "paper" ? "from-[#4865F4] to-[#5671F5] blue-reflect" : (random === "scissors" ? "from-[#EC9E0E] to-[#ECA922] yellow-reflect" : (random  === "rock" ? "from-[#DC2E4E] to-[#DD405D] red-reflect" : (random === "spock" ? "from-[#40B9CE] to-[#52BED1] cyan-reflect" : "from-[#834FE3] to-[#8C5DE5] purple-reflect")))} rounded-full flex justify-center items-center opacity-95 normal:w-32 normal:h-32 w-28 h-28`}>
            <div className="reflect bg-white rounded-full normal:w-24 normal:h-24 w-20 h-20 flex justify-center items-center ">
            <Image 
            src={`/images/icon-${random}.svg`}
            alt={`${random}`}
            width={50}
            height={50}
            className="normal:w-12 normal:h-14 w-10 h-12"/>
            </div>
            </div>}
            {loading && <div className="rounded-full normal:w-32 normal:h-32 w-28 h-28 bg-filter-1 animate-pulse">
                </div>}
            </div>
            <div className="flex xs:mt-0 xs:mb-8 mt-8 xs:order-1 w-5/6 lg:w-[52rem] justify-between mx-auto">
            <p className="text-white slide-in tracking-widest text-center relative normal:left-4 left-2">YOU PICKED</p>
            <p className="text-white self-end tracking-widest text-center relative left-0">HOUSE PICKED</p>
            </div>
        </section>
        {(window.innerWidth < 640) &&  <div className={`fade-in mx-auto pb-16 pt-16`}>
            <p className="text-white text-5xl text-center mb-4">{value === 0 ? "DRAW" : (value === 1 ? "YOU WIN" : "YOU LOSE")}</p>
            <button onClick = {() => setGame("")} className="bg-white text-[#3B4363] hover:text-[#DC2E4E] active:text-[#DC2E4E] rounded-lg w-48 py-3 tracking-[0.2em]">PLAY AGAIN</button>
            </div>}
        </>
    )
}