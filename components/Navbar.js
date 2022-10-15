import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SttrandLogo from './SttrandLogo'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap p-6'>
      <div className='flex w-3/12'>
        <SttrandLogo />
      </div>

      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow text-black'>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4'
          >
            Home
          </a>
          <Link href='/about'>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4'
            >
              About us
            </a>
          </Link>
          <Link href='/how_it_works'>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 hover:text-white'
            >
              How it works
            </a>
          </Link>
        </div>
        <div>
          <a
            href='#'
            className='inline-block text-sm px-4 py-2 leading-none bg-deep-blue border rounded-lg text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
          >
            Get the App
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
