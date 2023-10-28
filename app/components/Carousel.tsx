'use client';
import React from 'react'
import Login from './Login'
import { useRouter } from 'next/router'

const Carousel = () => {
  const router = useRouter();
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>Start of new beginning</h2>
        <p className='py-5 text-xl'>Love what you do and do what you love</p>
        <button className='px-8 py-2 border' onClick={() => router.push('/Login')}>Login</button>
      </div>
    </div>
  )
}

export default Carousel
