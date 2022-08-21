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
    <div className='bg-deep-blue w=[1920px] h-[675px]'>
      <div className='ml-[278px] flex'>
        <div className='flex mr-[153px] mt-[82px] flex-col'>
          <h1 className='uppercase text-white font-black text-4xl tracking-wide'>
            Contact us
          </h1>
          <p className='text-white'>Lorem ipsum dolor sit amet</p>
          <p className='text-white'>Let&apos;s Talk!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='bg-white mt-[82px] w-[757px] h-[511px] rounded-3xl p-14'>
            <div className='flex justify-between mb-10'>
              <input
                placeholder='First name'
                className='bg-[#F8F8F8] rounded-lg p-5 w-[289px] h-[50px]'
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
                className='bg-[#F8F8F8] rounded-lg p-5 w-[289px] h-[50px]'
              />
            </div>

            <div className='flex justify-between mb-10'>
              <input
                placeholder='Phone Number'
                onChange={handleChange}
                value={userData.phoneNumber}
                name='phoneNumber'
                required
                className='bg-[#F8F8F8] rounded-lg p-5 w-[289px] h-[50px]'
              />
              <input
                placeholder='Email'
                onChange={handleChange}
                name='email'
                type='email'
                required
                className='bg-[#F8F8F8] rounded-lg p-5 w-[289px] h-[50px]'
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
              className='inline-block text-sm px-4 py-2 leading-none bg-deep-blue border rounded-lg text-white border-white hover:border-transparent   mt-4 lg:mt-0'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
