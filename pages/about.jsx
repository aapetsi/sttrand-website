import Africa from '../components/Africa'
import Image from 'next/image'
import foodBasket from '../images/basket-full-vegetables@2x.png'
import whatsApp from '../images/Image 2@2x.png'
import fbMessenger from '../images/Facebook_Messenger_logo_2020.svg@2x.png'
import chatIcon from '../images/Icon material-chat@2x.png'
import Path from '../components/Path'

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
      <h1 className='font-bold text-3xl text-center mb-3'>About us</h1>
      <p className='text-center w-2/3 mx-auto'>
        Sttrand is a{' '}
        <span className='text-light-blue'>social commerce marketplace</span> for
        the continent of Africa. We know the cost of daily household goods are
        an important concern for consumers looking to provide for themselves and
        loved ones.
      </p>

      <div className='flex justify-center mb-3'>
        <Africa width='300' height='400' />
      </div>

      <p className='text-center w-2/3 mx-auto'>
        The market shopping experience leaves consumers bargaining on goods that
        fluctuate in price at any given time. No simplified way exists to
        partner together using social apps with others to{' '}
        <span className='text-light-blue'>
          increase a consumer&apos;s purchasing power on household items
        </span>{' '}
        within the continent of Africa today.
      </p>

      <div className='flex justify-center'>
        <Image src={foodBasket} width='' height='' alt='food basket' />
      </div>

      <div className='-mt-40 mb-6'>
        <Path width='400' />
      </div>

      <h1 className='text-center w-2/3 mx-auto font-bold mb-6'>
        <span className='text-light-blue'>&ldquo;</span>Our goal is to increase
        the purchasing power of the people within the continent while creating
        disposable income for our customers
        <span className='text-light-blue'>&rdquo;</span>
      </h1>

      <p className='text-center w-2/3 mx-auto font-extralight mb-10'>
        We utilize social apps to help consumers partner together to get
        everyday household items at great prices.
      </p>

      <div className='flex justify-between mb-16 w-5/6 mx-auto'>
        <div className='text-center'>
          <Image src={whatsApp} width='50' height='50' alt='whatsapp image' />
          <p className='mt-4'>WhatsApp</p>
        </div>
        <div className='text-center'>
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

      <h1 className='font-bold text-center mb-6'>Our Purpose</h1>

      <div className='flex justify-center mb-6'>
        <FriendsIconSvgComponent />
      </div>

      <p className='text-center p-4'>
        Provide consumers with the best prices on everyday household items
      </p>

      <hr className='w-1/3 mx-auto border-2 border-black mb-6' />

      <div className='flex justify-center mb-6'>
        <CartIconSvgComponent />
      </div>

      <p className='text-center p-4 mb-8'>
        Provide our Sellers access to customers they never would have sold
        directly to through our platform
      </p>
    </div>
  )
}

export default About
