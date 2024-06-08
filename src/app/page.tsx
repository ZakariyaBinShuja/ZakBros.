import Image from "next/image";
import Navbar from "./componet/Navbar";
import Mid from "./componet/Mid";
import Pop from "./componet/Pop";
import { PaginationDemo } from "./componet/sui";
import Hero from "./componet/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div>
        <Mid />
      </div>

      <div>
        <Pop />
      </div>

      <div>
        <PaginationDemo />
      </div>


      <div>
        <Hero />


      </div>
    </div>
  );
}
