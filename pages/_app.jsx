import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div className='min-h-screen bg-[#F8FAFB]'>
    <Navbar />
    <Component {...pageProps} />
  </div>
}

export default MyApp
