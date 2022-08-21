import Link from 'next/link'

const Footer = () => {
  return (
    <div className='mt-7'>
      <div className='flex justify-between ml-[506px] w-[941px] h-[173px]'>
        <div className='w-24'>Logo</div>
        <div className='flex flex-col mr-[80px]'>
          <p className='font-black mb-4'>COMPANY</p>
          <a>ABOUT US</a>
          <a>HOW IT WORKS</a>
          <Link href='/contact_us'>
            <a>CONTACT US</a>
          </Link>
          <a>SUPPORT</a>
        </div>
        <div className='flex flex-col mr-[80px]'>
          <p className='uppercase font-black mb-4'>Privacy & terms</p>
          <Link href='/privacy_policy'>
            <a>PRIVACY POLICY</a>
          </Link>
          <a>TERMS OF USE</a>
        </div>
        <div className='flex flex-col'>
          <p className='uppercase font-black mb-4'>help</p>
          <a>FAQs</a>
        </div>
      </div>
      <div className='flex justify-center text-white bg-deep-blue h-[72px] p-[24px] rounded-t-3xl'>
        Copyright &copy; 2022 Sttrand Inc
      </div>
    </div>
  )
}

export default Footer
