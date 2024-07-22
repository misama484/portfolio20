"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
  return (
    <div className="w-full h-full relative">
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {delay: 1, duration: 0.4, ease: "easeIn"},
        }}
        >
          {/* Imagen */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {delay: 1.4, duration: 0.4, ease: "easeInOut"},
        }}
        className="w-[398px] h-[398px] xl:w-[478px] xl:h-[518px] mix-blend-lighten ml-16 absolute ">
          <Image 
            src="/assets/fotoDifum.png" 
            alt="foto" 
            layout="fill" 
            priority 
            quality={100} 
            className= "bg-gradient-to-b from-black"  /> {/* CREAR GRADIENTE INFERIOR ESTE NO FUNCIONA */}
        </motion.div>

        {/* Circulo */}
        <motion.svg 
          className="w-[400px] xl:w-[646px] h-[400px] xl:h-[646px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle 
            cx="253" 
            cy="253" 
            r="250"
            stroke="#71c2f5"
            strokeWidth="4"
            initial={{ strokeDasharray:"24 10 0 0"}}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            />

          </motion.svg>

      </motion.div>

      
        

    </div>
  )
}


export default Photo