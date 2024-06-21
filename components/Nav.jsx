"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "servcios",
    path: "/Services",
  },
  {
    name: "sobreMi",
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
  {
    name: "Login",
    path: "/Login",
  },
  {
    name:"AdminPage", 
    path:"/AdminPage",
  },
]

const Nav = () => {
  const pathName = usePathname();


  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.path} className= {`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent translation-all`}>
            {link.name}
          </Link>
        );        
      })}
    </nav>
  )
}

export default Nav