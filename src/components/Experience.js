import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcons from './LiIcons'

const Details = ({ position, company, companyLink, time, address, work }) => {
  const liRef = useRef(null)
  return (
    <li
      ref={liRef}
      className="flex flex-col my-8 first:mt-0 last:mb-0  w-[60%] md:w-[80%] sm:w-[90%]  items-center justify-between "
    >
      <LiIcons reference={liRef} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <h3 className="font-bold text-2xl sm:text-xl xs:text-lg ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark "
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time}| {address}
        </span>
        <p className="font-medium w-full md:text-sm ">{work}</p>
      </motion.div>
    </li>
  )
}

function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })
  return (
    <div className="my-64 lg:w-[90%] md:w-full ">
      <h2 className="font-bold text-5xl mb-32 w-full text-center md:text-4xl md:mb-16 ">
        تجربه
      </h2>
      <div ref={ref} className="w-[75%] lg:w-[80%] md:w-[85%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -right-8 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light  "
        />
        <ul className="w-full flex flex-col items-start justify-between mr-4 xs:mr-2 ">
          <Details
            position={'طراح سایت '}
            company={'Google'}
            time={'1399-'}
            address={'مونتین ویو، کالیفورنیا'}
            work="عنوان یک طراح و سازنده سایت فول استک، میخواهم بوسیله تکنولوژیهای روز طراحی و ساخت را انجام دهم."
          />
          <Details
            position={'طراح سایت '}
            company={'Google'}
            time={'1399-'}
            address={'مونتین ویو، کالیفورنیا'}
            work="عنوان یک طراح و سازنده سایت فول استک، میخواهم بوسیله تکنولوژیهای روز طراحی و ساخت را انجام دهم."
          />
          <Details
            position={'طراح سایت '}
            company={'Google'}
            time={'1399-'}
            address={'مونتین ویو، کالیفورنیا'}
            work="عنوان یک طراح و سازنده سایت فول استک، میخواهم بوسیله تکنولوژیهای روز طراحی و ساخت را انجام دهم."
          />
          <Details
            position={'طراح سایت '}
            company={'Google'}
            time={'1399-'}
            address={'مونتین ویو، کالیفورنیا'}
            work="عنوان یک طراح و سازنده سایت فول استک، میخواهم بوسیله تکنولوژیهای روز طراحی و ساخت را انجام دهم."
          />
          <Details
            position={'طراح سایت '}
            company={'Google'}
            time={'1399-'}
            address={'مونتین ویو، کالیفورنیا'}
            work="عنوان یک طراح و سازنده سایت فول استک، میخواهم بوسیله تکنولوژیهای روز طراحی و ساخت را انجام دهم."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
