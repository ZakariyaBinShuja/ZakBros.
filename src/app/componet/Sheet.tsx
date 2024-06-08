import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenuDemo } from "./Button"
import { NavigationMenuDemo1 } from "./Button2"
import Image from "next/image"
import Link from "next/link"
 
export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><div>
            
            <Image src="/navicon.png" alt="navicon" width={50} height={50}/>
            </div></Button>
      </SheetTrigger>

     
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
          <SheetTrigger className="flex justify-center items-center text-center"><div className="flex justify-center items-center">
        <Image src="/Logo.png" alt="Logo" width={150} height={150}/>
        </div></SheetTrigger>
            <NavigationMenuDemo1/>
          </SheetDescription>
        </SheetHeader>
       
    
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="w-full"><Link href="/">Home</Link></Button>
           
          </SheetClose>
        </SheetFooter>
        
           <div className="w-full flex justify-center items-center"><SheetClose><button className="bg-slate-900 rounded-lg text-white px-5 py-2 w-full hover:bg-slate-700 mt-6">TOP IMDB</button></SheetClose></div>
   
      </SheetContent>
    </Sheet>
  )
}
