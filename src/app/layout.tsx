import { SettingsContextProvider } from '@/Context/SettingsContext'
import './globals.css'
import type { Metadata } from 'next'
import { RulesContextProvider } from '@/Context/RulesContext'
import { ModeTypeProvider } from '@/Context/ModeContext'
import { GameProvider } from '@/Context/GameContext'
import { ValueContextProvider } from '@/Context/ValueContext'
import { ScoreProvider } from '@/Context/ScoreContext'

export const metadata: Metadata = {
  title: 'Rock Paper Scissors',
  description: 'Rock Paper Scissors game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SettingsContextProvider>
          <RulesContextProvider>
            <ModeTypeProvider>
              <GameProvider>
                <ValueContextProvider>
                  <ScoreProvider>
                  {children}
                  </ScoreProvider>
                </ValueContextProvider>
              </GameProvider>
        </ModeTypeProvider>
        </RulesContextProvider>
        </SettingsContextProvider>
      </body>
    </html>
  )
}
