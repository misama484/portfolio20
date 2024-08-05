import Link from "next/link";
import { Button } from "./ui/button";
//Componentes
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import data from "../datos.json";

const Header = () => {
  const mail = data.datos.about.info[3].fieldValue
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">Miguel<span className="text-accent">.</span></h1>
          <p>Portfolio</p>
        </Link>

        {/* Navbar escritorio y contacto*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={`mailto:${mail}`}>
            <Button>Contactame</Button>
          </Link>
        </div>

        {/* Navbar movil */}        
        <div className="xl:hidden">
          <MobileNav />
        </div>
        
      
      </div>
    </header>
  )
}

export default Header