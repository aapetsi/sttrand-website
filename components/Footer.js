import Link from 'next/link'
import SttrandLogo from './SttrandLogo'

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='w-1/3 mx-auto mb-6'>
        <SttrandLogo />
      </div>
      <div className='flex mb-8 justify-around'>
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
        <p>Copyright &copy; 2022 Sttrand Inc</p>
      </div>
      {/* <div className='text-center md:flex md:justify-between md:ml-[506px] md:w-[941px] md:h-[173px]'>
        <div className='md:w-24'>Logo</div>
        <div className='flex flex-col md:mr-[80px]'>
          <p className='font-black md:mb-4'>COMPANY</p>
          <Link href='/about'>
            <a>ABOUT US</a>
          </Link>
          <a>HOW IT WORKS</a>
          <Link href='/contact_us'>
            <a>CONTACT US</a>
          </Link>
          <a>SUPPORT</a>
        </div>
        <div className='flex flex-col md:mr-[80px]'>
          <p className='uppercase font-black md:mb-4'>Privacy & terms</p>
          <Link href='/privacy_policy'>
            <a>PRIVACY POLICY</a>
          </Link>
          <Link href='#'>
            <a>TERMS OF USE</a>
          </Link>
        </div>
        <div className='flex flex-col'>
          <p className='uppercase font-black md:mb-4'>help</p>
          <Link href='#'>
            <a>FAQs</a>
          </Link>
        </div>
      </div>
      */}
    </div>
  )
}

export default Footer
