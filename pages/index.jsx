import Head from 'next/head'
import Image from 'next/image'
import analytics from '../images/Group 5562@2x.png'
import imageOne from '../images/image1.png'
import imageTwo from '../images/image2.png'
import imageThree from '../images/image3.png'
import appStore from '../images/appstore.png'
import googlePlayStore from '../images/googlePlayStore.png'
import homeImage from '../images/Image 3.png'
import products from '../images/Screen Shot 2022-07-13 at 11.02.15 PM@2x.png'


export default function Home() {
  return (
    <div>
      <h1 className='text-center font-bold mb-3'>
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
        <div className="bg-deep-blue ml-5 rounded-full w-[350px] h-[350px] absolute top-[60%]"></div>
        <div className='text-center'>
          <Image src={homeImage} alt='sttrand app home page' />
        </div>
      </div>

      <h1 className='text-center font-semibold mb-3'>A Platform Where Consumers<br /> can Utilize Social Apps to buy items<br/> at a Discount</h1>
      <p className='text-center w-2/3 mx-auto mb-3'>Consumers have the option to purchase everyday household items individually at a standard retail price or they can partner with a family/friend or other consumers on our platform to get a discounted price</p>

      <div className='bg-deep-blue flex flex-col justify-center text-center w-36 mx-auto h-10 mb-8 rounded-2xl'>
        <p className='text-white font-black text-sm'>Get the App</p>
      </div>

      <div>
        <div className="">image 1</div>
        <div className="">image 2</div>
        <div className="">image 3</div>
        <div className="">image 4</div>
        <div className="">image 5</div>
      </div>

      <div>
        <h1 className='text-center font-bold mb-3'>
          Different Payment
          <br /> Options Accepted
        </h1>
        <p className='text-center text-xs mb-10'>
          Different Delivery Options Available
        </p>
        <div className='flex justify-between p-3 mb-6'>
          <span className='w-32'>
            <Image src={imageOne} alt='shopping cart items' />
          </span>
          <span className='-mt-8 w-32'>
            <Image src={imageTwo} alt='items checkout' />
          </span>
          <span className='w-32'>
            <Image src={imageThree} alt='successful order' />
          </span>
        </div>
      </div>

      <div className='bg-deep-blue'>
        <h1 className='text-center text-white font-semibold mb-6 pt-4'>
          Become a Merchant
        </h1>
        <div className='bg-white w-1/3 mx-auto rounded-lg h-10 flex flex-col justify-center text-center mb-6'>
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
      {/* <div className='flex '>
        <div className='w-[483px] ml-[270px] mr-80 mt-32'>
          <h1 className='text-4xl font-bold tracking-wider'>
            Buy together,
            <br /> <span className='text-light-blue'>Save</span> together
          </h1>
          <p className='mb-5'>
            Realizing the power of community. Sttrand is the social commerce
            infrastructure for the continent of Africa
          </p>

        </div>
        <Image src={homeImage} />
      </div>

      <div className='mt-16'>
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

      <div className='flex justify-center content-center mb-16'>
        <div className='mt-[250px]'>
          <h1 className='font-bold text-3xl tracking-wider'>
            Different
            <br /> Payment Options
            <br /> Accepted
          </h1>
          <p className='tracking-wider'>Different Delivery Options Available</p>
        </div>
        <div className='mr-4'>
          <Image
            src={imageOne}
            width='265px'
            height='582px'
            alt='analytics dashboard'
          />
        </div>
        <div className='mr-4'>
          <Image
            src={imageOne}
            width='265px'
            height='582px'
            alt='analytics dashboard'
          />
        </div>
        <div>
          <Image
            src={imageOne}
            width='265px'
            height='582px'
            alt='analytics dashboard'
          />
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
      </div> */}
    </div>
  )
}
