import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <div className='p-6 justify-between flex items-center shadow-md'>
        <Image src="/logo.svg" alt="Logo" width={80} height={80} />
        <a href='/sign-in'>
        <Button> Get Started </Button>
        </a>
    </div>
  )
}

export default Navbar
