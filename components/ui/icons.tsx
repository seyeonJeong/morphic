'use client'

import Image from 'next/image'
import logo from '../images/logo.png'

function IconLogo({ className, ...props }: React.ComponentProps<'img'>) {
  return (

    <Image
      src={logo}
      width={150}
      height={100}
      alt="logo" 
    />

  )
}

export { IconLogo }
