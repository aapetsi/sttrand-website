import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
      <main className=''>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
