import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark/15 bg-light shadow-2xl overflow-hidden dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
      {/* <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" /> */}
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer lg:w-full "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between p-6 lg:w-full lg:pr-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-right text-2xl font-bold dark:text-light xs:text-sm">
            {title}
          </h2>{' '}
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />{' '}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="mr-8 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  sm:px-4 sm:text-base "
          >
            دیدن پروژه
          </Link>
        </div>
      </div>
    </article>
  )
}
const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark/20 bg-light shadow-2xl overflow-hidden relative dark:bg-dark xs:p-4">
      <Link href={link} target="_blank" className="w-full cursor-pointer  ">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between p-6">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base  ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-right text-xl font-bold lg:text-lg ">
            {title}
          </h2>{' '}
        </Link>
        <div className=" w-full mt-2 flex items-center justify-between ">
          <Link
            href={link}
            target="_blank"
            className=" font-semibold rounded-lg bg-dark text-light p-2 px-6 text-lg  underline dark:bg-light dark:text-dark md:text-base"
          >
            دیدن
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />{' '}
          </Link>
        </div>
      </div>
    </article>
  )
}

function projects() {
  return (
    <>
      <Head>
        <title> پروژه‌ها </title>
        <meta name="description" content="dsc" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text={'مهاجرت و دانش!'}
            className="mb-16 lg:!text-4xl sm:mb-8 sm:!text-3xl xs:!text-2xl "
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className="col-span-12">
              <FeaturedProject
                title={'کافی شاپ سه بعدی'}
                img={project1}
                summary={
                  'طراحی یک پروژه تماما سه بعدی برای کافی شاپ شمال شهر بوسیله نکست جی اس و تری جی اس به همراه ری اکت تری فایبر که منو و تجهیزات آن قابل چرخش سه بعدی هستند.'
                }
                link="/"
                type={'پروژه ویژه'}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Project
                title={'کافی شاپ سه بعدی'}
                img={project1}
                link="/"
                type={'پروژه ویژه'}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {' '}
              <Project
                title={'کافی شاپ سه بعدی'}
                img={project1}
                link="/"
                type={'پروژه ویژه'}
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={'کافی شاپ سه بعدی'}
                img={project1}
                summary={
                  'طراحی یک پروژه تماما سه بعدی برای کافی شاپ شمال شهر بوسیله نکست جی اس و تری جی اس به همراه ری اکت تری فایبر که منو و تجهیزات آن قابل چرخش سه بعدی هستند.'
                }
                link="/"
                type={'پروژه ویژه'}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {' '}
              <Project
                title={'کافی شاپ سه بعدی'}
                img={project1}
                link="/"
                type={'پروژه ویژه'}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {' '}
              <Project
                title={'کافی شاپ سه بعدی'}
                img={project1}
                link="/"
                type={'پروژه ویژه'}
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
