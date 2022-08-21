const FriendsIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={74.656}
    height={53.16}
    viewBox='0 0 74.656 53.16'
    {...props}
  >
    <path
      data-name='Icon awesome-user-friends'
      d='M23 26.58a12.54 12.54 0 10-12.543-12.54A12.534 12.534 0 0023 26.58zm8.6 3.583h-.929a17.313 17.313 0 01-15.339 0H14.4A12.9 12.9 0 001.5 43.061v3.225a5.376 5.376 0 005.374 5.374H39.12a5.376 5.376 0 005.374-5.374v-3.225A12.9 12.9 0 0031.6 30.163zm23.642-3.583a10.748 10.748 0 10-10.748-10.749A10.751 10.751 0 0055.242 26.58zm5.374 3.583h-.425a14.119 14.119 0 01-9.9 0h-.425a12.436 12.436 0 00-6.236 1.724 16.385 16.385 0 014.445 11.174v4.3c0 .246-.056.481-.067.717h19.774a5.376 5.376 0 005.374-5.374 12.534 12.534 0 00-12.54-12.54z'
      fill='none'
      stroke='#0e203f'
      strokeWidth={3}
    />
  </svg>
)

const StopWatchIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={54.912}
    height={66.888}
    viewBox='0 0 54.912 66.888'
    {...props}
  >
    <path
      data-name='Icon awesome-stopwatch'
      d='M53.409 39.434a25.955 25.955 0 11-29.947-25.643v-4.3h-3.494a1.5 1.5 0 01-1.5-1.5V3a1.5 1.5 0 011.5-1.5h14.973a1.5 1.5 0 011.5 1.5v4.989a1.5 1.5 0 01-1.5 1.5h-3.493v4.3a25.8 25.8 0 0112.441 5.565l3.431-3.431a1.5 1.5 0 012.121 0l3.534 3.533a1.5 1.5 0 010 2.121l-3.669 3.669-.075.075a25.7 25.7 0 014.178 14.113zm-21.961 4.492v-18.9a1.5 1.5 0 00-1.5-1.5h-4.989a1.5 1.5 0 00-1.5 1.5v18.9a1.5 1.5 0 001.5 1.5h4.991a1.5 1.5 0 001.498-1.5z'
      fill='none'
      stroke='#0e203f'
      strokeWidth={3}
    />
  </svg>
)

const TruckIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={79.906}
    height={56.834}
    viewBox='0 0 79.906 56.834'
    {...props}
  >
    <path
      data-name='Icon awesome-truck-moving'
      d='M76.159 26.17l-7.03-7.03a7.693 7.693 0 00-5.443-2.247h-4.507V5.35a3.841 3.841 0 00-3.845-3.85H5.345A3.841 3.841 0 001.5 5.35v40.371a9.589 9.589 0 0017.3 5.72 9.589 9.589 0 0017.3-5.72 10.128 10.128 0 00-.192-1.923h19.618a9.235 9.235 0 00-.192 1.923 9.613 9.613 0 1019.226 0 10.128 10.128 0 00-.192-1.923h2.115a1.928 1.928 0 001.923-1.923V31.601a7.665 7.665 0 00-2.247-5.431zM11.113 49.566a3.845 3.845 0 113.845-3.845 3.857 3.857 0 01-3.845 3.845zm15.381 0a3.845 3.845 0 113.845-3.845 3.857 3.857 0 01-3.845 3.845zM59.179 22.65h4.506a1.909 1.909 0 011.358.565l5.2 5.2H59.179zm5.768 26.917a3.845 3.845 0 113.845-3.845 3.857 3.857 0 01-3.845 3.844z'
      fill='none'
      stroke='#0e203f'
      strokeWidth={3}
    />
  </svg>
)

const Instructions = () => {
  return (
    <div>
      <div className='flex ml-[278px] mb-10 mt-10'>
        <div className='w-[416px] h-[393px] mr-[52px]'>
          <h1 className='text-6xl mb-3'>How it</h1>
          <h1 className='text-6xl mb-3'>works</h1>
          <p className='text-xl h-[143px]'>
            Sttrand is a platform that utilizes social media (WhatsApp, Facebook
            Messenger, SMS) which allows consumers to partner on purchasing
            items on a shopping mobile app
          </p>
        </div>
        <div className=''>
          <video
            src='https://res.cloudinary.com/dgpqfiv8g/video/upload/v1661057496/Sttrand_axn2a8.mp4'
            controls
            width='896px'
            height='393px'
          ></video>
        </div>
      </div>

      <section className='bg-deep-blue flex justify-center h-[612px]'>
        <div className='bg-white mt-[182px] w-[316px] h-[216px] mr-[33px] rounded-3xl'>
          <div className='flex'>
            <div className='mt-[48px] ml-[46px] mr-[6px] h-[64px] w-[109px] border-black border-[3px] rounded-lg'>
              <p className='text-center text-xs mt-[15px] font-black'>GHS 35</p>
              <p className='text-center' style={{ fontSize: '8px' }}>
                Buy yourself
              </p>
            </div>
            <div className='mt-[48px] h-[64px] w-[109px] border-black border-[3px] rounded-lg'>
              <p className='text-center text-xs mt-[15px] font-black'>GHS 23</p>
              <p className='text-center' style={{ fontSize: '8px' }}>
                Buy with friends
              </p>
            </div>
          </div>
          <div className='ml-[58px] w-[190px] h-[71px] text-xs text-center mt-2'>
            Consumers are presented with two price options on everyday household
            consumption goods (ee.g. groceries, etc)
          </div>
        </div>

        <div className='bg-white mt-[182px] w-[316px] h-[216px] mr-[33px] rounded-3xl'>
          <div className='flex justify-center mt-[54.92px]'>
            <FriendsIcon />
          </div>
          <div className='ml-[22px] w-[262px] h-[102px] text-xs text-center mt-2'>
            Consumers have the option to purchase common household items
            individually at a standard retail price or they can partner with a
            family/friend or other consumers on our platform to get a discounted
            price.
          </div>
        </div>

        <div className='bg-white mt-[182px] w-[316px] h-[216px] mr-[33px] rounded-3xl'>
          <div className='flex justify-center mt-[50.06px]'>
            <StopWatchIcon />
          </div>
          <div className='ml-[22px] w-[264px] h-[84px] text-xs text-center mt-2'>
            The family/friend or other consumers who have received a request to
            partner to purchase items have 24 hours to make their purchase.
          </div>
        </div>

        <div className='bg-white mt-[182px] w-[316px] h-[216px] mr-[33px] rounded-3xl'>
          <div className='flex justify-center mt-[60.11px]'>
            <TruckIcon />
          </div>
          <div className='ml-[22px] w-[264px] h-[84px] text-xs text-center mt-4'>
            The items can be picked up at your local market or will be delivered
            once the order has been completed and placed.
          </div>
        </div>
      </section>
    </div>
  )
}

export default Instructions
