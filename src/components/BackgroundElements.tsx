import Image from 'next/image';
import React from 'react';
import blurCyan from '../assets/blur-indigo.png'

type Props = {}

export default function BackgroundElements({}: Props) {
  return (
    <div className=' h-screen md:w-screen xl:justify-center z-0 flex items-center'>
        {/* <Image src={blurCyan} height={'700'} width={'700'} alt=''/> */}

    </div>
  )
}