import Head from 'next/head'
import Image from 'next/image'
import analytics from '../images/Group 5562@2x.png'
import imageOne from '../images/image1.png'
import imageTwo from '../images/image2.png'
import imageThree from '../images/image3.png'
import appStore from '../images/appstore.png'
import imagex1 from '../images/imagex1.png'
import imagex2 from '../images/imagex2.png'
import imagex3 from '../images/imagex3.png'
import imagex4 from '../images/imagex4.png'
import imagex5 from '../images/imagex5.png'
import googlePlayStore from '../images/googlePlayStore.png'
import homeImage from '../images/Image 3.png'
import products from '../images/Screen Shot 2022-07-13 at 11.02.15 PM@2x.png'

export default function Home() {
  return (
    <div>
      <h1 className='text-center font-bold mb-3 text-4xl'>
        <span className='text-light-blue'>Buy</span> together,
        <br /> Save together
      </h1>
      <p className='text-center text-sm w-2/3 mx-auto mb-6'>
        Realizing the power of community. Sttrand is the social commerce
        infrastructure for the continent of Africa.
      </p>

      <div className='flex justify-between w-2/3 mx-auto mb-6'>
        <div className='w-32'>
          <Image src={appStore} alt='apple store image' />
        </div>

        <div className='w-32'>
          <Image src={googlePlayStore} alt='google play store image' />
        </div>
      </div>

      <div className='mb-12'>
        <div className='bg-deep-blue rounded-full w-8 h-8 absolute top-[55%] ml-5'></div>
        <div className='bg-deep-blue ml-5 rounded-full w-[350px] h-[350px] absolute top-[60%]'></div>
        <div className='bg-deep-blue ml-[89%] rounded-full w-8 h-8 absolute top-[90%]'></div>
        <div className='text-center'>
          <Image src={homeImage} alt='sttrand app home page' />
        </div>
      </div>

      <h1 className='text-center font-semibold mb-3 text-2xl'>
        A Platform Where Consumers
        <br /> can Utilize Social Apps to buy items
        <br /> at a Discount
      </h1>
      <p className='text-center w-2/3 mx-auto mb-3'>
        Consumers have the option to purchase everyday household items
        individually at a standard retail price or they can partner with a
        family/friend or other consumers on our platform to get a discounted
        price
      </p>

      <div className='bg-deep-blue flex flex-col justify-center text-center w-36 mx-auto h-10 mb-8 rounded-2xl'>
        <p className='text-white font-black text-sm'>Get the App</p>
      </div>

      <div className='flex flex-wrap justify-center'>
        <div className='w-5/12 p-4'>
          <Image src={imagex1} alt='' />
        </div>
        <div className='w-5/12 p-4 mt-10'>
          <Image src={imagex2} alt='' />
        </div>
        <div className='w-5/12 p-4 -mt-5'>
          <Image src={imagex3} alt='' />
        </div>
        <div className='w-5/12 p-4 mt-5'>
          <Image src={imagex4} alt='' />
        </div>
        <div className='w-5/12 p-4'>
          <Image src={imagex5} alt='' />
        </div>
      </div>

      <div className='md:flex md:items-center md:justify-evenly md:mt-24'>
        <div className=''>
          <h1 className='text-center font-extrabold mb-3 md:text-3xl md:text-left'>
            Different Payment
            <br /> Options Accepted
          </h1>
          <p className='text-center text-xs mb-10 md:text-xl md:text-left'>
            Different Delivery Options Available
          </p>
        </div>
        <div className='flex justify-between p-3 mb-6'>
          <span className='w-32 md:w-72'>
            <Image src={imageOne} alt='shopping cart items' />
          </span>
          <span className='-mt-8 w-32 md:w-72 md:-mt-24'>
            <Image src={imageTwo} alt='items checkout' />
          </span>
          <span className='w-32 md:w-72'>
            <Image src={imageThree} alt='successful order' />
          </span>
        </div>
      </div>

      <div className='bg-deep-blue'>
        <h1 className='text-center text-white md:text-2xl font-semibold mb-6 pt-4'>
          Become a Merchant
        </h1>
        <div className='bg-white w-1/3 md:w-1/6 mx-auto rounded-lg h-10 md:h-12 flex flex-col justify-center text-center mb-6'>
          <p>Learn more</p>
        </div>

        <div className='w-11/12 mx-auto mb-6'>
          <Image src={analytics} alt='analytics' />
        </div>

        <div className='w-11/12 mx-auto mb-8'>
          <Image src={products} alt='products' />
        </div>

        <div className='h-3 mb-10'></div>
      </div>
    </div>
  )
}
