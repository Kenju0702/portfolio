import React from 'react'
import { MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { PiGearSixThin } from "react-icons/pi";

const AboutDetail = () => {
  return (
    <div className='grid grid-cols-2 text-justify gap-24'>
        <div className=' '>
            <h1 className='text-3xl font-bold tracking-wider relative uppercase  '> <MdOutlineDesignServices className='absolute opacity-10 font-light text-8xl -top-11 -left-10' />Desgin</h1>
            <p className='text-lg mt-6'> i can design the site based on your need and suggestions
                . i can also design the site from scratch and consult you during the job</p>
        </div>
        <div className=' '>
            <h1 className='text-3xl font-bold tracking-wider relative uppercase  '> <HiOutlineWrenchScrewdriver  className='absolute opacity-10 font-light text-8xl -top-11 -left-10' />Development</h1>
            <p className='text-lg mt-6'> i can design the site based on your need and suggestions
                . i can also design the site from scratch and consult you during the job</p>
        </div>
        <div className='flex flex-col col-span-2 w-full items-center '>
            <div className='w-1/2'> <h1 className='text-3xl font-bold tracking-wider relative uppercase '> <PiGearSixThin  className='absolute opacity-10 font-light text-8xl -top-11 -left-10' />maintenance</h1>
            <p className='text-lg mt-6'> i can design the site based on your need and suggestions
                . i can also design the site from scratch and consult you during the job</p></div>
           
        </div>
    </div>
  )
}

export default AboutDetail