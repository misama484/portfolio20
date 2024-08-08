"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import Typewriter from 'typewriter-effect';


const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "sobre Mi",
    path: "/About",
  },
  {
    name: "trabajos",
    path: "/Work",
  },
  {
    name: "contacto",
    path: "/Contact",
  },
]

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        {/* Logo */}
        <div className='mt-28 mb-40 text-center text-2xl'>
          <Link href='/'>
            <h1 className='text-4xl font-semibold mb-4'>Miguel Sánchez<span className='text-accent'>.</span></h1>
          </Link>
          <Typewriter
              className="text-accent"
              options={{
                strings: "Desarrollador Junior",
                typeString:<p clasname="text-accent">Desarrollador</p>,
                autoStart: true,
                loop: true,
              }}/>
        </div>
        {/* nav */}
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.path} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav

/*



*/