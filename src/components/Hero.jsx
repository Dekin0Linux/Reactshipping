import React from 'react'
import {MdDone} from 'react-icons/md'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='container md:mx-auto'>
        <div className='md:flex items-center py-5 mx-10 '>
            <div className='md:w-[50%] mb-5 md:mb-0'>
                <h1 className='font-bold lg:text-6xl text-4xl leading-10 mb-5'>Delivery <br /> reliability, <br /> right on time </h1>
                <p className='text-xl leading-8 mb-6'>Be Always on time in every place where people <br /> need your product.</p>
                <div>
                    <p className='mb-6 text-xl inline-flex items-center gap-4'><MdDone size={25}/>Quick and easy reservation</p> <br />
                    <p className='mb-6 text-xl inline-flex items-center gap-4'> <MdDone size={25}/>Fast and reliable shipment</p> <br />
                    <p className='mb-6 text-xl inline-flex items-center gap-4'><MdDone size={25}/>  Worldwide coverage</p>
                </div>

                <div className='inline-flex gap-6'>
                    <Link to={'/tracking'}>
                        <button className='px-6 py-3 bg-blue-900 text-white font-semibold rounded'>Shipment Tracking</button>
                    </Link>
                    
                    <button className='px-6 py-3 border-blue-900 text-black font-semibold rounded _hover:bg-blue-500'>Request Quote</button>
                </div>
            </div>
            <div className='md:w-[50%]'>
                <img src="https://www.pngitem.com/pimgs/m/367-3676518_transparent-logistics-png-global-logistics-png-download.png" alt="" className='object-cover'/>
            </div>

        </div>

    </div>
  )
}

export default Hero