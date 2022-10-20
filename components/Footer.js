import Link from 'next/link'
import SttrandLogo from './SttrandLogo'
import sttrandLogo from '../images/Asset 3@4x-8.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='w-1/3 mx-auto mb-6 md:hidden'>
        <SttrandLogo />
      </div>
      <div className='flex mb-8 justify-around md:hidden'>
        <div className='flex flex-col'>
          <h1 className='mb-4 text-xs font-black'>COMPANY</h1>
          <Link href='/about'>
            <a className='text-xs'>ABOUT US</a>
          </Link>
          <Link href='/how_it_works'>
            <a className='text-xs'>HOW IT WORKS</a>
          </Link>
          <Link href='/contact_us'>
            <a className='text-xs'>CONTACT US</a>
          </Link>
          <Link href='/support'>
            <a className='text-xs'>SUPPORT</a>
          </Link>
        </div>

        <div className='flex flex-col'>
          <h1 className='mb-4 text-xs font-black'>PRIVACY & TERMS</h1>
          <Link href='/privacy_policy'>
            <a className='text-xs'>PRIVACY POLICY</a>
          </Link>
          <Link href='/terms'>
            <a className='text-xs'>TERMS OF USE</a>
          </Link>
        </div>

        <div className='flex flex-col'>
          <h1 className='mb-4 text-xs font-black'>HELP</h1>
          <Link href='/faqs'>
            <a className='text-xs'>FAQS</a>
          </Link>
        </div>
      </div>

      <div className='flex justify-center text-white h-10 bg-deep-blue rounded-t-full items-center'>
        <p>Copyright &copy; {new Date().getFullYear()} Sttrand Inc</p>
      </div>
    </div>
  )
}

export default Footer
