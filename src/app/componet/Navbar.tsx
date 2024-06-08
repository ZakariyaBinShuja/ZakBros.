import React from 'react'
import Image from 'next/image'
import { NavigationMenuDemo } from './Button'
import Link from 'next/link'
import { SheetDemo } from "../componet/Sheet"

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center '>
        <div className='pb-5 pt-5'>
     <Link href="/"> <Image src="/Zak.png" alt='Zak' height={100} width={150}/></Link>
      </div>

    
        <div className="flex justify-evenly items-center gap-20 text-white ">
          <div className='hidden lg:block'>
       <NavigationMenuDemo/>
       </div>
       <div className='lg:hidden sm:block'>
        <SheetDemo></SheetDemo>
       </div>
        </div>
        
   
    </div>
  )
}

export default Navbar
