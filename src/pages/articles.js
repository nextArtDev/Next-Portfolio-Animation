import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import article1 from '../../public/images/articles/smooth scrolling in reactjs.png'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)

  function handleMouse(e) {
    imgRef.current.style.display = 'inline-block'
    x.set(e.pageX)
    y.set(-10)
  }
  function handleMouseLeave(e) {
    imgRef.current.style.display = 'none'
    x.set(0)
    y.set(0)
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl font-semibold hover:underline dark:text-light ">
        {title}
      </h2>
      <FramerImage
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        // style={{ x: x, y: y }}
        priority
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
      />
    </Link>
  )
}

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark/20 dark:border-light dark:bg-dark sm:flex-col"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:pl-0 sm:self-start xs:text-sm">
        {date}
      </span>
    </motion.li>
  )
}

const FeaturedArticles = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark/25 rounded-2xl dark:bg-dark dark:border-light ">
      <Link href={link} target="_blank" className="w-full cursor-pointer  ">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="text-2xl font-bold my-2 hover:underline mt-4 xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 ">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  )
}

function articles() {
  return (
    <>
      <Head>
        <title> مقالات </title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text={'کلمات می‌توانند دنیا را تغییر دهند'}
            className="mb-16 lg:!text-4xl sm:mb-8 sm:!text-3xl xs:!text-2xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16 ">
            <FeaturedArticles
              title={'ساخت یک المان پیج بندی در ری اکت از آغاز'}
              summary={
                'طراحی یک پروژه تماما سه بعدی برای کافی شاپ شمال شهر بوسیله نکست جی اس و تری جی اس به همراه ری اکت تری فایبر که منو و تجهیزات آن قابل چرخش سه بعدی هستند.'
              }
              time={'9 دقیقه برای خواندن'}
              link={'/'}
              img={article1}
            />
            <FeaturedArticles
              title={'ساخت یک المان پیج بندی در ری اکت از آغاز'}
              summary={
                'طراحی یک پروژه تماما سه بعدی برای کافی شاپ شمال شهر بوسیله نکست جی اس و تری جی اس به همراه ری اکت تری فایبر که منو و تجهیزات آن قابل چرخش سه بعدی هستند.'
              }
              time={'9 دقیقه برای خواندن'}
              link={'/'}
              img={article1}
            />
          </ul>
          <h2 className="font-bold text-3xl w-full text-center my-16 mt-32 ">
            ادامه مقالات
          </h2>
          <ul>
            <Article
              title={'ساخت یک المان پیج بندی در ری اکت از آغاز'}
              link={'/'}
              img={article1}
              date="20/03/1401"
            />
            <Article
              title={'ساخت یک المان پیج بندی در ری اکت از آغاز'}
              link={'/'}
              img={article1}
              date="20/03/1401"
            />
            <Article
              title={'ساخت یک المان پیج بندی در ری اکت از آغاز'}
              link={'/'}
              img={article1}
              date="20/03/1401"
            />
            <Article
              title={'ساخت یک المان پیج بندی در ری اکت از آغاز'}
              link={'/'}
              img={article1}
              date="20/03/1401"
            />
            <Article
              title={'ساخت یک المان پیج بندی در ری اکت از آغاز'}
              link={'/'}
              img={article1}
              date="20/03/1401"
            />
            <Article
              title={'ساخت یک المان پیج بندی در ری اکت از آغاز'}
              link={'/'}
              img={article1}
              date="20/03/1401"
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles
