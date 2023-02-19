import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='max-h-full h-screen bg-[#F8FAFB]'>
      <div className='max-w-6xl mx-auto flex justify-between px-4 xl:px-0 md:mb-44'>
        <div className='w-full md:w-6/12 px-4 flex flex-col gap-4 md:gap-8 mt-12 md:mt-36 md:px-8 md:py-24'>
          <h1 className="w-full md:w-[28rem] font-sans text-4xl lg:text-[3rem] font-semibold text-[#1E304A] leading-[3.75rem]">
            Boost your chances of landing that dream job
          </h1>
          <button className="bg-blue-700 text-white py-3 md:px-5 px-8 w-40 rounded mb-3 hover:bg-blue-600 transition-all ease-in duration-300"><Link href="/cv-builder">Create CV Now</Link></button>
        </div>
        <div className='hidden md:flex w-5/12 lg:w-6/12 md:mt-28'>
          <Image src={'/creator.svg'} width={700} height={700} alt='hero-section' />
        </div>
      </div>
    </div>
  )
}

export default Home