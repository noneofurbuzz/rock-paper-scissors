"use client"

import Game from "@/components/Game";
import Options from "@/components/Options";
import Rules from "@/components/Rules";
import Score from "@/components/Score";
import Settings from "@/components/Settings";
import { RulesContext,ShowType } from "@/Context/RulesContext";
import { SettingsContext } from "@/Context/SettingsContext";
import { useState } from "react";
export default function Home() {
  const [showRules,setShowRules] = useState(false)
  const [showSettings,setShowSettings] = useState(false)
  return (
    <main className={`bg-gradient-to-b from-[#1F3756] font-barlow to-[#141539] min-h-screen flex flex-col place-content-between pt-8 pb-16`}>
      {(showRules || showSettings) && <section className="fixed bg-filter h-full z-10 -mt-8 w-full"></section>}
      <Score />
      <Game />
      <RulesContext.Provider value={{setShowRules,showRules}}>
      <SettingsContext.Provider value={{showSettings,setShowSettings}}>
      <Options />
      {showRules && <section className="absolute w-full z-20">
        <Rules/>
      </section> }
      {showSettings && <section className="absolute w-full z-20">
        <Settings />
      </section>}
      </SettingsContext.Provider>
      </RulesContext.Provider>
  
    </main>
  )
}
