import { useState } from 'react'

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='bg-deep-blue mb-10'>
      <div className='flex text-center font-black flex-col'>
        <h1 className='mb-2 text-white mt-10'>CONTACT US</h1>
        <p className='mb-2 text-white material-symbols-outlined'>home</p>
        <p className='text-white font-extralight w-2/3 mx-auto mb-4'>
          Send us a message and we will respond as soon as possible
        </p>
        <div className='bg-white w-10/12 mx-auto rounded-lg mb-32'>
          <form className='mt-10 mb-10' onSubmit={handleSubmit}>
            <input
              placeholder='First name'
              className='bg-off-white rounded-lg h-9 p-4 mb-5 w-10/12 font-extralight text-sm'
              onChange={handleChange}
              value={userData.firstName}
              required
              name='firstName'
            />

            <input
              placeholder='Last Name'
              onChange={handleChange}
              value={userData.lastName}
              required
              name='lastName'
              className='bg-off-white rounded-lg h-9 p-4 mb-5 w-10/12 font-extralight text-sm'
            />

            <input
              placeholder='Phone Number'
              onChange={handleChange}
              value={userData.phoneNumber}
              name='phoneNumber'
              required
              className='bg-off-white rounded-lg h-9 p-4 mb-5 w-10/12 font-extralight text-sm'
            />

            <input
              placeholder='Email'
              onChange={handleChange}
              name='email'
              type='email'
              required
              className='bg-off-white rounded-lg h-9 p-4 mb-5 w-10/12 font-extralight text-sm'
            />

            <textarea
              placeholder='Message'
              onChange={handleChange}
              name='message'
              required
              className='bg-off-white rounded-lg h-40 p-4 mb-5 w-10/12 font-extralight text-sm resize-none'
            />

            <button
              type='submit'
              className='flex ml-7 text-sm px-4 py-2 leading-none bg-deep-blue border rounded-full text-white font-extralight border-white hover:border-transparent'
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* <div */}
      {/* <div className='md:ml-[278px] md:flex'>
        <div className='flex mr-[153px] mt-[82px] flex-col'>
          <h1 className='uppercase md:text-white font-black text-4xl tracking-wide'>
            Contact us
          </h1>
          <p className='md:text-white invisible md:visible'>
            Lorem ipsum dolor sit amet
          </p>
          <p className='md:text-white invisible md:visible'>Let&apos;s Talk!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='bg-white md:mt-[82px] md:w-[757px] md:h-[511px] rounded-3xl md:p-14 p-3'>
            <div className='md:flex md:justify-between md:mb-10'>
              <input
                placeholder='First name'
                className='bg-[#F8F8F8] rounded-lg md:p-5 md:w-[289px] md:h-[50px] h-10 p-4 mb-2 w-full'
                onChange={handleChange}
                value={userData.firstName}
                required
                name='firstName'
              />
              <input
                placeholder='Last Name'
                onChange={handleChange}
                value={userData.lastName}
                required
                name='lastName'
                className='bg-[#F8F8F8] rounded-lg md:p-5 md:w-[289px] md:h-[50px] h-10 p-4 w-full mb-2'
              />
            </div>

            <div className='md:flex md:justify-between md:mb-10'>
              <input
                placeholder='Phone Number'
                onChange={handleChange}
                value={userData.phoneNumber}
                name='phoneNumber'
                required
                className='bg-[#F8F8F8] rounded-lg md:p-5 md:w-[289px] md:h-[50px] h-10 p-4 mb-2 w-full'
              />
              <input
                placeholder='Email'
                onChange={handleChange}
                name='email'
                type='email'
                required
                className='bg-[#F8F8F8] rounded-lg md:p-5 md:w-[289px] md:h-[50px] h-10 p-4 mb-2 w-full'
              />
            </div>

            <textarea
              placeholder='Message'
              onChange={handleChange}
              name='message'
              required
              className='bg-[#F8F8F8] w-full h-[129px] p-5 rounded-lg resize-none mb-10'
            />

            <button
              type='submit'
              className='inline-block text-sm px-4 py-2 leading-none bg-deep-blue border rounded-lg text-white border-white hover:border-transparent md:mt-4 lg:mt-0'
            >
              Submit
            </button>
          </div>
        </form>
      </div> */}
    </div>
  )
}

export default Contact
