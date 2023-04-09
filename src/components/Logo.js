import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionLink = motion(Link)

function Logo() {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark rounded-full flex items-center justify-center text-2xl font-bold text-light border border-solid border-transparent dark:border-light "
        whileHover={{
          backgroundColor: [
            '#264653',
            '#2a9d8f',
            '#e9c46a',
            '#f4a261',
            '#e76f51',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        SM
      </MotionLink>
    </div>
  )
}

export default Logo
