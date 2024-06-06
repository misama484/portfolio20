import { motion } from "framer-motion"

//variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top:["100%", "0%"],
  },
}; 

//calcular el index inverso
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1; 
}

const Stairs = () => {
  return (
    <>
      {/* Renderizado de 6 div que representan el efecto de escalera */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div 
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}          
          className="h-full w-full bg-gradient-to-b from-accent to-transparent rounded-t-3xl relative "
          />
        )
      })}
    </>
  )
}

export default Stairs