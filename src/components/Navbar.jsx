import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container md:mx-auto sticky top-0 bg-white z-50 '>
        <div className='md:flex justify-between items-center py-5 mx-5'>
            <div className='w-20'>
                <img src="https://cdn-icons-png.flaticon.com/512/7245/7245083.png" alt="logo" className='object-cover'/>
            </div>
            
            <div className='inline-flex gap-5'>
                <Link to='/'>Home</Link>
                <Link to='/tracking'>Tracking</Link>
                <Link href="">Pricing</Link>
                <Link href="">Service</Link>
                <Link href="">About</Link>
            </div>


            <div className='mt-5 md:mt-0'>
                <Link>
                    <button className='px-5 py-2 border-blue-600 border-2 rounded font-semibold text-blue-600 hover:bg-blue-200'>Contact Us</button>
                </Link>
            </div>

            
        </div>

    </div>
  )
}

export default Navbar