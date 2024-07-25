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
        className="border border-red"
        >
          {/* Imagen */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {delay: 1.4, duration: 0.4, ease: "easeInOut"},
        }}
        className="w-[398px] h-[398px] xl:w-[578px] xl:h-[618px] mix-blend-lighten ml-1 absolute">
          <Image 
            src="/assets/fotoDifum.png" 
            alt="foto" 
            layout="fill" 
            priority 
            quality={100} 
            className= "image "  /> {/* creado gradiente, en global.css */}
        </motion.div>

        {/* Circulo */}
        <motion.svg 
          className="w-[450px] xl:w-[646px] h-[450px] xl:h-[646px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle 
            cx="253" 
            cy="253" 
            r="260"
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