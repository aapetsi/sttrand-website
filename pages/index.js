import Head from 'next/head'
import Image from 'next/image'
import analytics from '../images/Group 5562@2x.png'
import products from '../images/Screen Shot 2022-07-13 at 11.02.15 PM@2x.png'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div>
        <h1 className='text-center tracking-wide text-3xl font-black mb-6'>
          A Platform Where Consumers
          <br /> can Utilize Social Apps to buy Items
          <br /> at a Discount
        </h1>
        <p className='text-center tracking-wide text-xl mb-10'>
          Consumers have the option to purchase everyday household items
          individually at
          <br /> a standard retail price or they can partner with a
          family/firend or other
          <br /> consumers on our platform to get a discounted price.
        </p>
        <div className='text-center mb-10'>
          <button className='w-[200px] h-[60px] bg-deep-blue text-white rounded-lg'>
            Get the App
          </button>
        </div>
      </div>

      <div className='bg-deep-blue'>
        <h1 className='text-center text-white pt-10 mb-6 text-4xl tracking-wider'>
          Become a Merchant
        </h1>
        <div className='text-center'>
          <button className='mx-auto rounded-lg bg-white w-[200px] h-[50px] mb-10'>
            Learn more
          </button>
        </div>
        <div className='ml-[300px] mb-10'>
          <Image
            src={analytics}
            width='1320px'
            height='800px'
            alt='analytics dashboard'
          />
        </div>
        <div className='ml-[300px] pb-24'>
          <Image
            src={products}
            width='1320px'
            height='800px'
            alt='products list'
          />
        </div>
      </div>
    </div>
  )
}
