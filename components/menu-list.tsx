import React from 'react'
import { Button } from '@/components/ui/button'

type MenuItemProps = {
  name: string
}

const MenuItem: React.FC<MenuItemProps> = ({ name }) => (
  <div className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
    {name}
  </div>
)

export function MenuList() {
  const menuItems = ['Project1', 'Project2', 'Project3']

  return (
    <div className="flex flex-col space-y-2 h-full p-4">
      {menuItems.map((item, index) => (
        <MenuItem key={index} name={item} />
      ))}
    </div>
  )
}
