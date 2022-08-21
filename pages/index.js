import Head from 'next/head'
import Image from 'next/image'
import analytics from '../images/Group 5562@2x.png'
import products from '../images/Screen Shot 2022-07-13 at 11.02.15 PM@2x.png'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
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
