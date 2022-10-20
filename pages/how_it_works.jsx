import FriendsIcon from '../components/FriendsIcon'
import StopWatchIcon from '../components/StopWatchIcon'
import TruckIcon from '../components/TruckIcon'

const Instructions = () => {
  return (
    <div className='mb-10'>
      <div className='md:flex md:p-10 md:items-center'>
      <div className='text-center w-2/3 mx-auto mb-6 md:text-left'>
        <h1 className='font-bold text-2xl md:text-5xl mb-3'>
          How it <span className='text-light-blue'>works</span>
        </h1>
        <p className='md:text-2xl'>
          Sttrand is a platform that utilizes social media (WhatsApp, Facebook
          Messenger, SMS) which allows consumers to partner on purchasing items
          on a shopping mobile app.
        </p>
      </div>

      <div className=''>
        <video
          className='p-6'
          src='https://res.cloudinary.com/dgpqfiv8g/video/upload/v1661057496/Sttrand_axn2a8.mp4'
          controls
          // width='896px'
          // height='393px'
        ></video>
      </div>
      </div>

      <div className='bg-deep-blue p-9 md:flex md:justify-evenly'>
        <div className='flex bg-white flex-col rounded-3xl p-10 mb-8 md:w-3/12 md:mr-6'>
          <div className='flex justify-between mb-3'>
            <div className='flex flex-col text-center justify-center border-2 border-solid rounded-xl border-black w-28 h-16'>
              <h1 className='text-sm font-bold'>35 GHC</h1>
              <p className='text-xs'>Buy yourself</p>
            </div>
            <div className='flex flex-col text-center justify-center border-2 border-solid rounded-xl border-black w-28 h-16'>
              <h1 className='text-sm font-bold'>23 GHC</h1>
              <p className='text-xs'>Buy with friends</p>
            </div>
          </div>
          <div className='text-center'>
            <p>
              Consumers are presented with two price options on everyday goods
              (e.g. groceries, etc)
            </p>
          </div>
        </div>

        <div className='flex bg-white flex-col rounded-3xl p-6 mb-8 md:w-3/12 md:mr-6'>
          <div className='mx-auto mb-6'>
            <StopWatchIcon />
          </div>
          <p className='text-center'>
            The family/friend or other consumers who have received a request to
            partner to purchase items have 24 hours to make their purchase
          </p>
        </div>

        <div className='flex bg-white flex-col rounded-3xl p-6 mb-8 md:w-3/12 md:mr-6'>
          <div className='mx-auto mb-6'>
            <FriendsIcon />
          </div>
          <p className='text-center'>
            Consumers have the option to purchase common household items
            individually at a standard retail price or they can partner with a
            family/friend or other consumers on our platform to get a discounted
            price.
          </p>
        </div>

        <div className='flex bg-white flex-col rounded-3xl p-6 mb-8 md:w-3/12 '>
          <div className='mx-auto mb-6'>
            <TruckIcon />
          </div>
          <p className='text-center'>
            The items can be picked up at your local market or will be delivered
            once the order has been completed and placed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Instructions
