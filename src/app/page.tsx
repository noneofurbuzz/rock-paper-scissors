"use client"

import { useGameContext } from "@/Context/GameContext";
import { useModeContext } from "@/Context/ModeContext";
import { useRulesContext } from "@/Context/RulesContext";
import { useSettingsContext } from "@/Context/SettingsContext";
import BasicGame from "@/components/BasicGame";
import GameResult from "@/components/GameResult";
import Options from "@/components/Options";
import ProGame from "@/components/ProGame";
import Rules from "@/components/Rules";
import Score from "@/components/Score";
import Settings from "@/components/Settings";
import { useEffect } from "react";

export default function Home() {
  const {showRules} = useRulesContext()
  const {showSettings} = useSettingsContext()
  const {gameMode} = useModeContext()
  const {game,setGame} = useGameContext()
  useEffect(() => {
    setGame("")
  },[gameMode])
  return (
    <main className={`bg-gradient-to-b from-[#1F3756] font-barlow to-[#141539] min-h-screen flex flex-col place-content-between pt-8 pb-16`}>
      {(showRules || showSettings) && <section className="fixed bg-filter h-full z-10 -mt-8 w-full"></section>}
      <Score />
      {game === "" ? (gameMode === "Basic" ? <BasicGame /> : <ProGame />) : <GameResult />}
      <Options />
      {showRules && <section className="absolute w-full z-20">
        <Rules/>
      </section> }
      {showSettings && <section className="absolute w-full z-20">
        <Settings />
      </section>}
    </main>
  )
}
