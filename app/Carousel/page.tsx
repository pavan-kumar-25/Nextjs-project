'use client';
import React from 'react'
import { useRouter } from 'next/navigation'

const Carousel = ({heading, message}) => {
  const router = useRouter();
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <button className='px-8 py-2 border' onClick={() => router.push('/login')}>Login</button>
      </div>
    </div>
  )
}

export default Carousel
