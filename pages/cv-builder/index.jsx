import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const CvBuilder = () => {
  let router = useRouter();
  const cvFormBuilder = () => {
    router.push('/cv-builder/cv-builder-form');
  }
  return (
    <div className='max-h-full h-36 py-28'>
      <div className='max-w-6xl mx-auto flex flex-col h-80 px-32 py-6 rounded-lg gap-6'>
        <h1 className='text-center text-4xl text-[#4A4A4A] font-semibold'>Create A New Resume</h1>
        <div className='shadow-md w-2/4 mx-auto cursor-pointer hover:scale-75 hover:shadow-xl transition-all duration-300 ease-in-out rounded-xl'>
          <div className='bg-[#6474BA] p-6 rounded-t-xl'>
            <Image src={'/create-resume.png'} width={500} height={500} alt='hero-section' />
          </div>
          <div className="bg-white py-5 rounded-b-xl text-center" onClick={cvFormBuilder}>
            <h2 className='text-center text-xl text-[#4A4A4A] font-semibold'>Create a New Resume</h2>
            <p className='text-[#989898] text-[15px]'>We'll guide you through each resume section!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CvBuilder