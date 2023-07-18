import { useGameContext } from "@/Context/GameContext"
import Image from "next/image"
export default function BasicGame(){
    const {setGame} = useGameContext()
    return(
        <section className="pt-36 pb-20">
        <Image 
        src={"/images/bg-triangle.svg"}
        alt="triangle"
        width={200}
        height={200}
        className="mx-auto
        right-0 left-0 absolute  xs:w-64"/>
        <div className="flex justify-center gap-16 xs:gap-28 relative
        bottom-10">
        <button onClick = {() => setGame("paper")} className="group bg-gradient-to-b from-[#4865F4] to-[#5671F5] blue-reflect rounded-full vs:w-28 vs:h-28  w-24 h-24 flex justify-center items-center opacity-95">
        <div className="reflect bg-white rounded-full vs:w-20 vs:h-20 w-16 h-16 flex justify-center items-center">
        <Image 
        src = "/images/icon-paper.svg"
        alt="paper"
        width={50}
        height={50}
        className="group-hover:animate-wiggle vs:w-10 vs:h-12 w-8 h-10"/>
        </div>
        </button>
        <button onClick = {() => setGame("scissors")} className="group bg-gradient-to-b from-[#EC9E0E] to-[#ECA922] yellow-reflect rounded-full vs:w-28 vs:h-28 w-24 h-24 flex justify-center items-center opacity-95">
        <div className="reflect bg-white rounded-full vs:w-20 vs:h-20 w-16 h-16 flex justify-center items-center">
        <Image 
        src = "/images/icon-scissors.svg"
        alt="scissors"
        width={50}
        height={50}
        className="group-hover:animate-wiggle vs:w-10 vs:h-12 w-8 h-10"/>
        </div>
        </button>
        </div>
        <button onClick = {() => setGame("rock")} className="group bg-gradient-to-b from-[#DC2E4E] to-[#DD405D] red-reflect rounded-full vs:w-28 vs:h-28 w-24 h-24 flex justify-center items-center mx-auto xs:mt-10 opacity-95">
        <div className="reflect bg-white rounded-full vs:w-20 vs:h-20 w-16 h-16 flex justify-center items-center">
        <Image 
        src = "/images/icon-rock.svg"
        alt="rock"
        width={50}
        height={50}
        className="group-hover:animate-wiggle vs:w-10 vs:h-12 w-8 h-10"/>
        </div>
        </button>
        </section>
    )
}