import Image from "next/image"
export default function Game(){
    return(
        <section className="pt-36 pb-20">
        <Image 
        src="/images/bg-triangle.svg"
        alt="triangle"
        width={200}
        height={200}
        className="mx-auto
        right-0 left-0 absolute"/>
        <div className="flex justify-center gap-16 relative
        bottom-10">
        <div className="bg-gradient-to-b from-[#4865F4] to-[#5671F5] rounded-full w-28 h-28 flex justify-center items-center opacity-95">
        <div className="bg-white rounded-full w-20 h-20 flex justify-center items-center">
        <Image 
        src = "/images/icon-paper.svg"
        alt="paper"
        width={50}
        height={50}
        className="w-10 h-12"/>
        </div>
        </div>
        <div className="bg-gradient-to-b from-[#EC9E0E] to-[#ECA922] rounded-full w-28 h-28 flex justify-center items-center opacity-95">
        <div className="bg-white rounded-full w-20 h-20 flex justify-center items-center">
        <Image 
        src = "/images/icon-scissors.svg"
        alt="scissors"
        width={50}
        height={50}
        className="w-10 h-12"/>
        </div>
        </div>
        </div>
        <div className="bg-gradient-to-b from-[#DC2E4E] to-[#DD405D] rounded-full w-28 h-28 flex justify-center items-center mx-auto opacity-95">
        <div className="bg-white rounded-full w-20 h-20 flex justify-center items-center">
        <Image 
        src = "/images/icon-rock.svg"
        alt="rock"
        width={50}
        height={50}
        className="w-10 h-12"/>
        </div>
        </div>
        </section>
    )
}