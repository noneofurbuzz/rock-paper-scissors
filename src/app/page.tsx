import Game from "@/components/Game";
import Options from "@/components/Options";
import Score from "@/components/Score";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#1F3756] font-barlow to-[#141539] min-h-screen flex flex-col place-content-between pt-8 pb-16">
      <section className="">
      <Score />
      </section>
      <Game />
      <section className="">
      <Options />
      </section>
    </main>
  )
}
