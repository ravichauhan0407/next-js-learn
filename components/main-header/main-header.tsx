import Link from "next/link";
import logoImg from '@/assets/logo.png'
import Image from "next/image";
import { Navlink } from "./nav-link";

export default function MainHeader(){
  
     return <header className="flex flex-row justify-between p-4 items-center">
           <Link href='/' className="flex flex-row items-center gap-4 text-lg" >
            <Image src={logoImg} style={{width:100}} alt="im" priority/>
          <div>Next Level Food</div> 
        </Link>
      
        <div className="flex flex-row gap-10">
          <Navlink href="/meals">Browse Meals</Navlink>
          <Navlink href="community"> Foodies Community</Navlink>
        </div>
     </header>
}