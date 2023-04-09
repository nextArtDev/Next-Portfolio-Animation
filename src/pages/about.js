import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimateNumbers = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 4000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])
  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])
  return <span ref={ref}></span>
}

function About() {
  return (
    <>
      <Head>
        <title> درباره من </title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light overflow-x-hidden ">
        <Layout className="pt-16">
          <AnimatedText
            text={'علاقه هدف را تقویت می‌کند'}
            className="text-5xl mb-16 lg:!text-4xl sm:!text-3xl xs:!text-2xl sm:mb-8 "
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 ">
              <h2 className="mb-4  text-xl font-bold text-dark/75 dark:text-light/75 ">
                زندگی‌نامه
              </h2>
              <p className="font-medium md:text-xl sm:text-lg xs:text-sm">
                به عنوان یک طراح و سازنده سایت فول استک، میخواهم بوسیله
                تکنولوژیهای روز طراحی و ساخت را انجام دهم. متن از پیش ساخته برای
                طراحی.
              </p>
              <p className="font-medium md:text-xl sm:text-lg xs:text-sm">
                به عنوان یک طراح و سازنده سایت فول استک، میخواهم بوسیله
                تکنولوژیهای روز طراحی و ساخت را انجام دهم. متن از پیش ساخته برای
                طراحی.
              </p>
              <p className=" my-4 font-medium md:text-xl sm:text-lg xs:text-sm">
                به عنوان یک طراح و سازنده سایت فول استک، میخواهم بوسیله
                تکنولوژیهای روز طراحی و ساخت را انجام دهم. متن از پیش ساخته برای
                طراحی.
              </p>
            </div>
            <div className=" col-span-3 xl:col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light md:order-1 md:col-span-8 ">
              <div className="absolute top-0 -right-2 -z-10 w-[101%] h-[102%] rounded-[1.5rem] bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt="saeed"
                className="w-full  h-auto rounded-2xl transform scale-x-2 "
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
              {/* </div> */}
            </div>
            <div className="col-span-2 flex flex-col items-center justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
              <div className="flex flex-col items-start justify-center xl:items-center ">
                <span className="inline-block text-4xl font-bold md:text-3xl sm:text-2xl xs:text-xl ">
                  <AnimateNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-small ">
                  {' '}
                  مخاطبان{' '}
                </h2>
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="inline-block text-4xl font-bold md:text-3xl sm:text-2xl xs:text-xl ">
                  <AnimateNumbers value={35} />+
                </span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-small ">
                  {' '}
                  پروژه{' '}
                </h2>
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="inline-block text-4xl font-bold md:text-3xl sm:text-2xl xs:text-xl">
                  <AnimateNumbers value={4} /> +
                </span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-small ">
                  {' '}
                  سال تجربه{' '}
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default About
