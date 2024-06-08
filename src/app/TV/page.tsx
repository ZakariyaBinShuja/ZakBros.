import React from 'react'
import Navbar from "../componet/Navbar";
import Mid from "../componet/Mid";
import Pop from "../componet/Pop";
import { PaginationDemo } from "../componet/sui";
import Hero from "../componet/Hero";
import Link from 'next/link';

const TV = () => {
  return (
    <div>
<Navbar/>

<div className='flex bg-blue-400 text-blue-900 font-bold text-xl mr-28 ml-28 mt-5 p-3'>
<Link href="/"> <h1>Home</h1></Link>
/
      <h1>Movies</h1>
     /
     <h1>TV & Movies</h1> 
    </div>

<div>
  <Pop/>
</div>

<div>
  <PaginationDemo/>
</div>
</div>

  )
}

export default TV
