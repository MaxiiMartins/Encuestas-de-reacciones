import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import Aos from 'aos'

const Layout = () => {

  useEffect(() => {
    Aos.init()
  }, [])


  return (
      <div className="w-full flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
        <main className="md:p-3 w-full flex-1 text-center">
          <Navbar />
          <Outlet />
        </main>
        <Footer />
      </div>
  )
}

export default Layout