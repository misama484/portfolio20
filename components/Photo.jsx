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
        <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {delay: 1, duration: 0.4, ease: "easeIn"},
        }}
        className="w-[298px] h-[298px] xl:w-[898px] xl:h-[898] mix-blend-lighten">
          <Image src="/assets/foto.png" alt="foto" layout="fill" objectFit="contain" priority quality={100} className="object-contain w-[898] h-[898]" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo