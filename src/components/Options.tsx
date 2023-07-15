import { useRulesContext } from "@/Context/RulesContext"
import { useSettingsContext } from "@/Context/SettingsContext"


export default function Options(){
    const {setShowRules} = useRulesContext()
    const {setShowSettings} = useSettingsContext()
    function handleClickRules() {
        setShowRules(prevShow => !prevShow)
    }
    function handleClickSettings(){
        setShowSettings(prevSettings => !prevSettings)
    }
    return(
        <section className="flex justify-between items-center text-white font-semibold mx-6 flex-col vs:flex-row">
            <button onClick={handleClickSettings} className="border-white border-[1px] text-white tracking-[0.2em] rounded-lg w-36 py-2 mb-3 vs:mb-0 hover:bg-white active:bg-white hover:text-[#141539] active:text-[#141539] hover:ease-in-out hover:scale-[0.955] active:ease-in-out active:scale-[0.955] duration-300">SETTINGS</button>
            <button onClick = {handleClickRules}className="border-white border-[1px] text-white tracking-[0.2em] rounded-lg w-36 py-2 hover:bg-white active:bg-white hover:text-[#141539] active:text-[#141539] hover:ease-in-out hover:scale-[0.955] duration-300 active:ease-in-out active:scale-[0.955]">RULES</button>
        </section>
    )
}
