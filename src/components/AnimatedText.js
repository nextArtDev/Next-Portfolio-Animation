import React from 'react'
import { motion } from 'framer-motion'
function AnimatedText({ text, className }) {
  const quote = {
    initial: { opacity: 1 },
    animate: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.08 } },
  }
  const singleWord = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 1 },
    },
  }
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0 ">
      <motion.h1
        className={` inline-block w-full text-dark font-bold text-5xl dark:text-light ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            variants={singleWord}
            key={word + '-' + index}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}

export default AnimatedText
