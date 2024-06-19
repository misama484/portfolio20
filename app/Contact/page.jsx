"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue  } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: 'Telefono',
    description: '666777888',
  },
  {
    icon: <FaEnvelope/>,
    title: 'Email',
    description: 'contacto@miguelsanchez.dev',
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: 'Direccion',
    description: 'Alzira, Valencia',
  },
  
]

const Contact = () => {
  return (
    <motion.section
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1, transition:{ delay:1.4, duration: 0.4, ease:"easeIn"} }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* fromulario */}
          <div className="xl:h-[54%] ordere-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"> 
              <h3 className="text-4xl text-accent">Contactame!</h3>
              <p className="text-white/60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deleniti, beatae architecto voluptatibus distinctio error explicabo itaque nostrum accusamus ipsam eos nobis illo qui minima fugit rerum perspiciatis earum. Consequuntur?</p>
            
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xk:mb-0">info</div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact