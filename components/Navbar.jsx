import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import foodBasket from '../images/Asset 3@4x-8.png'
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className='flex p-12 justify-between'>
      <span><Image src={foodBasket} width='90' height='20' alt='sttrand logo' /></span>
      <nav>
        <section className='MOBILE-MENU flex lg:hidden'>
          <div
            className='HAMBURGER-ICON space-y-2 m'
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>
            <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]'>
              <li onClick={() => setIsNavOpen(false)} className='border-b border-gray-400 my-8 uppercase'>
                <Link href='/'>Home</Link>
              </li>
              <li onClick={() => setIsNavOpen(false)} className='border-b border-gray-400 my-8 uppercase'>
                <Link href='/about'>About Us</Link>
              </li>
              <li onClick={() => setIsNavOpen(false)} className='border-b border-gray-400 my-8 uppercase'>
                <Link href='/how_it_works'>How it works</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className='DESKTOP-MENU hidden space-x-8 lg:flex'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/how_it_works'>How it Works</Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  )
}


export default Navbar
