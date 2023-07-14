import { RulesContext } from "@/Context/RulesContext"
import Image from "next/image"
import { useContext } from "react"
export default function Rules(){

    const {setShowRules} = useContext(RulesContext)
    function handleClick(){
        setShowRules(false)
    }
    return(
    <section className="bg-white h-screen w-full -mt-8 fixed flex flex-col  place-content-around s:rounded-xl s:h-96 s:w-96 s:top-1/2 s:-translate-y-1/2 s:left-1/2 s:-translate-x-1/2">
        <div className="s:flex s:justify-between w-full">
            <p className = "text-[#3B4363] text-3xl s:ml-8 font-barlow1 text-center">RULES</p>
            <button onClick={handleClick} className="mr-8 my-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className = "self-center hidden s:block hover:fill-black opacity-25 fill-[#3b4262] active:fill-black "width="20" height="20"><path fill-rule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" /></svg>
            </button>
        </div>
        <Image 
        src = "/images/image-rules.svg"
        alt="image-rules"
        width={250}
        height={250}
        className="self-center vs:w-72 vs:h-64"/>
        <button onClick={handleClick} className="mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className = "self-center s:hidden hover:fill-[#3B4363] fill-[#3b4262] active:fill-[#3b4363] "width="20" height="20"><path fill-rule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25"/></svg>
        </button>
    </section>
    )
}