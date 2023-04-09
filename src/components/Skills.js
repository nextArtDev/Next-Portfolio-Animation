import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}
function Skills() {
  return (
    <>
      <h2 className="font-bold text-5xl mt-64 w-full text-dark dark:text-light text-center md:text-4xl md:mt-32 ">
        مهارت‌ها
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm ">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2 "
          whileHover={{ scale: 1.05 }}
        >
          وب
        </motion.div>
        <Skill name={'CSS'} x="-20vw" y="2vw" />
        <Skill name={'JavaScript'} x="0vw" y="-22vw" />
        <Skill name={'HTML'} x="20vw" y="5vw" />
        <Skill name={'React'} x="0vw" y="10vw" />
        <Skill name={'Next'} x="-16vw" y="-15vw" />
        <Skill name={'ThreeJs'} x="15vw" y="-12vw" />
        <Skill name={'Node'} x="30vw" y="-5vw" />
        <Skill name={'Express'} x="0vw" y="-10vw" />
        <Skill name={'MongoDB'} x="0vw" y="22vw" />
        <Skill name={'Figma'} x="-25vw" y="15vw" />
        <Skill name={'UI/UX'} x="25vw" y="15vw" />
      </div>
    </>
  )
}

export default Skills
