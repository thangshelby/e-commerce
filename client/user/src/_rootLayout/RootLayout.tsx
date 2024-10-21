
import { Outlet } from 'react-router-dom'
import { Navbar,Footer } from '../components'

const RootLayout = () => {
  return (
    <div className='w-full'>
        <Navbar />
        <div className='w-full'>

        <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default RootLayout