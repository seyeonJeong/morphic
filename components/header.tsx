import React from 'react'
import { ModeToggle } from './mode-toggle'
// import { Menubar } from './menu'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'
import HistoryContainer from './history-container'
import MenuContainer from './menu'

export const Header: React.FC = async () => {
  return (
    <header className="fixed w-full p-1 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
      <div className='flex gap-0.5'>
        <HistoryContainer location="header" />
        <a href="/">
          <IconLogo />
          <span className="sr-only">Morphic</span>
        </a>
      </div>
      <div className="flex gap-0.1">
        <MenuContainer location="header" />
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
