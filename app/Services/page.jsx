"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Desarrollo web",
    description: "Desarrollo de sitios web y aplicaciones web a medida, con las últimas tecnologías y tendencias.",
    link: "",
  },  {
    num: "02",
    title: "Desarrollo de aplicaciones",
    description: "Desarrollo aplicaciones a medida, estudiando cada caso y adaptandonos a las necesidaes del cliente, con las últimas tecnologías y tendencias.",
    link: "",
  },  {
    num: "03",
    title: "E-shops",
    description: "Desarrollo de tiendas on-line y sistemas de ventas",
    link: "",
  },  {
    num: "04",
    title: "Desarrollo integral de negocio online",
    description: "Desde el planteamiento inical hasta la entrega final del producto, nos encargamos de diseñar y desarrollar todo el ecosistema online de tu empresa",
    link: "",
  },
]

const  Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1, 
            transition: {delay:2.4, duration: 0.4, ease: "easeIn",},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index)=>{
            return (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.link} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
              {/* title */}
              <h2 className="text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              {/* Subtitle */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full">

              </div>
            </div>
          );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services