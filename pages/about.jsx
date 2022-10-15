import Africa from '../components/Africa'
import Image from 'next/image'
import foodBasket from '../images/basket-full-vegetables@2x.png'
import whatsApp from '../images/Image 2@2x.png'
import fbMessenger from '../images/Facebook_Messenger_logo_2020.svg@2x.png'
import chatIcon from '../images/Icon material-chat@2x.png'

function PathSvgComponent(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={1942.424}
      height={272.728}
      viewBox='0 0 1942.424 272.728'
      {...props}
    >
      <path
        data-name='Path 5466'
        d='M-300 7466.667l1942.424-272.728v115.152z'
        transform='translate(300 -7193.939)'
        fill='#0e203f'
      />
    </svg>
  )
}

function FriendsIconSvgComponent(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={92.098}
      height={65.368}
      viewBox='0 0 92.098 65.368'
      {...props}
    >
      <path
        data-name='Icon awesome-user-friends'
        d='M28.229 32.684a15.592 15.592 0 10-15.592-15.592 15.584 15.584 0 0015.592 15.592zm10.692 4.455h-1.155a21.527 21.527 0 01-19.072 0h-1.156A16.042 16.042 0 001.5 53.177v4.009a6.684 6.684 0 006.682 6.682h40.094a6.684 6.684 0 006.682-6.682v-4.009a16.042 16.042 0 00-16.037-16.038zm29.4-4.455A13.365 13.365 0 1054.959 19.32a13.368 13.368 0 0013.364 13.364zm6.682 4.455h-.529a17.555 17.555 0 01-12.307 0h-.529a15.463 15.463 0 00-7.754 2.144 20.373 20.373 0 015.527 13.894v5.346c0 .306-.07.6-.084.891h24.588a6.684 6.684 0 006.685-6.683 15.584 15.584 0 00-15.594-15.592z'
        fill='none'
        stroke='#0e203f'
        strokeWidth={3}
      />
    </svg>
  )
}

function CartIconSvgComponent(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={82.551}
      height={73.7}
      viewBox='0 0 82.551 73.7'
      {...props}
    >
      <path
        data-name='Icon awesome-shopping-cart'
        d='M74.426 43.108l6.528-28.722a3.314 3.314 0 00-3.232-4.049H23.484L22.219 4.15a3.314 3.314 0 00-3.247-2.65H4.814A3.314 3.314 0 001.5 4.814v2.209a3.314 3.314 0 003.314 3.315h9.65l9.7 47.424a7.734 7.734 0 109.258 1.183h28.95a7.731 7.731 0 108.782-1.437l.762-3.352a3.314 3.314 0 00-3.232-4.049H31.619l-.9-4.419h40.476a3.314 3.314 0 003.231-2.58z'
        fill='none'
        stroke='#0e203f'
        strokeWidth={3}
      />
    </svg>
  )
}

const About = () => {
  return (
    <div>
      <div className='ml-[200px]'>
        <div className='flex justify-between mt-12'>
          <div className='w-[607px] mt-24'>
            <h1 className='text-6xl font-black tracking-wide'>About us</h1>
            <p className='mt-5 tracking-wider text-xl'>
              Sttrand is a{' '}
              <span className='text-[#8FDFFA]'>
                social commerce marketplace
              </span>{' '}
              <br></br>for the continent of Africa. We know the<br></br> cost of
              daily household goods are an important<br></br> concern for
              consumers looking to provide for <br></br>themselves and loved
              ones.
            </p>
          </div>
          <div className='h-[562px] mr-[278px]'>
            <Africa />
          </div>
        </div>

        <div className='flex mt-10 justify-between'>
          <div>
            <Image
              src={foodBasket}
              width='600px'
              height='450px'
              alt='food basket'
            />
          </div>
          <div>
            <p className='text-xl tracking-wider mt-40 mr-[278px]'>
              The market shopping experience leaves consumers<br></br>{' '}
              bargaining on goods that fluctuate in price at any<br></br> given
              time. No simplified way exists to partner<br></br> together using
              social apps with others to{' '}
              <span className='text-[#8FDFFA]'>
                increase a<br></br> consumer&apos;s purcasing power on household
                <br></br>
                items
              </span>{' '}
              withing the continent of Africa today.
            </p>
          </div>
        </div>
      </div>
      <PathSvgComponent />
      <h1 className='text-center font-black text-3xl tracking-wide mb-10'>
        <span className='text-[#8FDFFA]'>&ldquo;</span>Our goal is to increase
        the purchasing power of
        <br></br> the people within the continent while creating<br></br>{' '}
        disposable income for our customers
        <span className='text-[#8FDFFA]'>&rdquo;</span>
      </h1>

      <p className='text-center tracking-wide mb-10'>
        We utilize <span className='text-[#8FDFFA]'>social apps</span> to help
        consumers partner together
        <br></br>
        to get everyday household items at great prices.
      </p>

      <div className='flex justify-center mb-20'>
        <div className='text-center mr-16'>
          <Image src={whatsApp} width='50' height='50' alt='whatsapp image' />
          <p className='mt-4'>WhatsApp</p>
        </div>
        <div className='text-center mr-16'>
          <Image
            src={fbMessenger}
            width='50'
            height='50'
            alt='facebook messenger image'
          />
          <p className='mt-4'>
            Facebook<br></br> Messenger
          </p>
        </div>
        <div className='text-center'>
          <Image src={chatIcon} width='50' height='50' alt='chat icon' />
          <p className='mt-4'>SMS</p>
        </div>
      </div>

      <div className='h-[728px] bg-[#FBFBFB]'>
        <p className='text-center text-3xl font-bold tracking-wide pt-[209px] mb-16'>
          Our Purpose
        </p>
        <div className='flex justify-center'>
          <div className='flex flex-col w-[600px] border-r-4 border-black'>
            <div className='mx-auto mb-10'>
              <FriendsIconSvgComponent />
            </div>
            <p className='text-center tracking-wide text-xl'>
              Provide consumers with the best
              <br /> prices on everyday household items
            </p>
          </div>
          <div>
            <div className='flex flex-col w-[600px]'>
              <div className='mx-auto mb-8'>
                <CartIconSvgComponent />
              </div>
              <p className='text-center tracking-wide text-xl'>
                Provide our Sellers access to
                <br /> customers they never would have
                <br /> sold directly to through our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
