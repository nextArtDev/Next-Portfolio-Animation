import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base ">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 ">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <div className="flex items-center">
          <Link
            href="/"
            className="underline text-dark underline-offset-4 font-bold "
          >
            {' '}
            Saeid
          </Link>
          &nbsp;Build with
        </div>
      </Layout>
    </footer>
  )
}

export default Footer
