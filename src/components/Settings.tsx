import { useGameContext } from "@/Context/GameContext"
import { useModeContext } from "@/Context/ModeContext"
import { useScoreContext } from "@/Context/ScoreContext"
import { useSettingsContext } from "@/Context/SettingsContext"
import { useContext } from "react"

export default function Settings(){
    const {setShowSettings} = useSettingsContext()
    const{setGame} = useGameContext()
    const {setGameMode,gameMode} = useModeContext()
    const {setProScore,setBasicScore,basicScore,proScore} = useScoreContext()
    function handleClick(){
        setShowSettings(false)
    }
    function handleBasicClick(){
        setGameMode("Basic")
        setShowSettings(false)
    }
    function handleProClick(){
        setGameMode("Pro")
        setShowSettings(false)
    }
    function handleNewGame(){
        if(gameMode === "Basic"){
            setBasicScore(0)
        }
        else{
            setProScore(0)
        }
        setGame("")
        setShowSettings(false)
        
    }
    return(
        <section className="bg-white -mt-8 fixed flex flex-col rounded-xl h-[26rem] xs:w-96 w-4/5 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 xxs:h-96">
        <div className="flex justify-between w-full mt-8">
            <p className = "text-[#3B4363] text-3xl ml-8 font-barlow1 text-center">OPTIONS</p>
            <button onClick={handleClick} className="mr-8 my-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className = "self-center hover:fill-black opacity-25 fill-[#3b4262] active:fill-black "width="20" height="20"><path fill-rule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" /></svg>
            </button>
        </div>
        <div className="flex flex-col items-center mx-8 mt-12 xxs:mx-0">
        <p className="text-center tracking-[0.2em] text-[#3b4363] border-b-2 mb-6 border-[#3b4363]">GAME PROGRESS</p>
        <button onClick = {handleNewGame} className="button-reflect border-white border-[1px] text-white tracking-[0.2em] rounded-lg xxs:w-72 w-full py-2 bg-[#141539] hover:ease-in-out hover:scale-[0.955] hover:brightness-125 duration-300 active:ease-in-out active:scale-[0.955] active:brightness-125">NEW GAME</button>
        </div>
        <div className="flex flex-col items-center mx-8 xxs:mx-0 mt-8 ">
        <p className="text-center tracking-[0.2em] text-[rgb(59,67,99)] border-b-2 mb-6 border-[#3b4363]">MODE</p>
        <div className="flex xxs:flex-row flex-col w-full justify-center">
        <button onClick={handleBasicClick} className="button-reflect border-white border-[1px] text-white tracking-[0.2em] rounded-lg xxs:w-36 w-full py-2 bg-[#141539] hover:ease-in-out hover:scale-[0.955] hover:brightness-125 duration-300 active:ease-in-out active:scale-[0.955] active:brightness-125">BASIC</button>
        <button onClick = {handleProClick} className="button-reflect border-white border-[1px] text-white tracking-[0.2em] rounded-lg xxs:w-36 w-full py-2 bg-[#141539] hover:ease-in-out hover:scale-[0.955] hover:brightness-125 duration-300 active:ease-in-out active:scale-[0.955] active:brightness-125">PRO</button>
        </div>
        </div>
    </section>
    )
}