import { useGameContext } from "@/Context/GameContext"
import Image from "next/image"
import { use } from "react"

export default function ProGame(){
    const {setGame} = useGameContext()
    return(
        <section className="pt-36 pb-20">
            <Image 
            src={"/images/bg-pentagon.svg"}
            alt="pentagon"
            width={200}
            height={200}
            className="mx-auto right-0 left-0 absolute  xs:w-64"/>
            <button onClick = {() => setGame("scissors")} className="group bg-gradient-to-b from-[#EC9E0E] to-[#ECA922] yellow-reflect rounded-full xs:w-24 xs:h-24 w-20 h-20 relative xs:bottom-7 bottom-9 flex justify-center items-center mx-auto opacity-95">
            <div className="reflect bg-white rounded-full xs:w-[4.5rem] xs:h-[4.5rem] w-14 h-14 flex justify-center items-center">
            <Image 
            src = "/images/icon-scissors.svg"
            alt="scissors"
            width={40}
            height={40}
            className="group-hover:animate-wiggle xs:w-8 xs:h-10 w-6 h-8"/>
            </div>
            </button>
            <div className="flex justify-center gap-20 xs:gap-28 relative
            bottom-10">
            <button onClick = {() => setGame("spock")} className="group bg-gradient-to-b from-[#40B9CE] to-[#52BED1] cyan-reflect rounded-full xs:w-24 xs:h-24 w-20 h-20 flex justify-center items-center opacity-95">
            <div className="reflect bg-white rounded-full xs:w-[4.5rem] xs:h-[4.5rem] w-14 h-14 flex justify-center items-center">
            <Image 
            src = "/images/icon-spock.svg"
            alt="spock"
            width={40}
            height={40}
            className="group-hover:animate-wiggle xs:w-8 xs:h-10 w-6 h-8"/>
            </div>
            </button>
            <button onClick = {() => setGame("paper")} className="group bg-gradient-to-b from-[#4865F4] to-[#5671F5] blue-reflect rounded-full xs:w-24 xs:h-24 w-20 h-20 flex justify-center items-center opacity-95">
            <div className="reflect bg-white rounded-full xs:w-[4.5rem] xs:h-[4.5rem] w-14 h-14 flex justify-center items-center">
            <Image 
            src = "/images/icon-paper.svg"
            alt="paper"
            width={40}
            height={40}
            className="group-hover:animate-wiggle xs:w-8 xs:h-10 w-6 h-8"/>
            </div>
            </button>
            </div>
            <div className="flex xs:mt-8 mt-6 justify-center gap-10 xs:gap-16 relative
            bottom-10">
            <button onClick = {() => setGame("lizard")} className="group bg-gradient-to-b from-[#834FE3] to-[#8C5DE5] purple-reflect rounded-full xs:w-24 xs:h-24 w-20 h-20 flex justify-center items-center opacity-95">
            <div className="reflect bg-white rounded-full xs:w-[4.5rem] xs:h-[4.5rem] w-14 h-14 flex justify-center items-center">
            <Image 
            src = "/images/icon-lizard.svg"
            alt="lizard"
            width={40}
            height={40}
            className="group-hover:animate-wiggle xs:w-8 xs:h-10 w-6 h-8"/>
            </div>
            </button>
            <button onClick = {() => setGame("rock")} className="group bg-gradient-to-b from-[#DC2E4E] to-[#DD405D] red-reflect rounded-full xs:w-24 xs:h-24 w-20 h-20 flex justify-center items-center opacity-95">
            <div className="reflect bg-white rounded-full xs:w-[4.5rem] xs:h-[4.5rem] w-14 h-14 flex justify-center items-center">
            <Image 
            src = "/images/icon-rock.svg"
            alt="rock"
            width={40}
            height={40}
            className="group-hover:animate-wiggle xs:w-8 xs:h-10 w-6 h-8"/>
            </div>
            </button>
            </div>
        </section>
    )
}
