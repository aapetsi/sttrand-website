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
      <div className='flex text-center font-black flex-col md:flex-row'>
        <div className='md:flex md:flex-col md:mt-10'>
        <h1 className='mb-2 text-white mt-10'>CONTACT US</h1>
        <p className='mb-2 text-white material-symbols-outlined'>home</p>
        <p className='text-white font-extralight w-2/3 mx-auto mb-4'>
          Send us a message and we will respond as soon as possible
        </p>
        </div>
        <div className='bg-white w-10/12 mx-auto rounded-lg mb-32 md:mt-20 md:mr-24'>
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
              className='flex ml-7 md:ml-[8.5%] text-sm px-4 py-2 leading-none bg-deep-blue border rounded-full text-white font-extralight border-white hover:border-transparent'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
