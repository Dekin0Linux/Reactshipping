import React from 'react'

function Navbar() {
  return (
    <div className='container md:mx-auto sticky top-0 bg-white z-50 '>
        <div className='md:flex justify-between items-center py-5 mx-5'>
            <div className='w-20'>
                <img src="https://cdn-icons-png.flaticon.com/512/7245/7245083.png" alt="logo" className='object-cover'/>
            </div>
            
            <div className='inline-flex gap-5'>
                <a href="">Home</a>
                <a href="">Tracking</a>
                <a href="">Pricing</a>
                <a href="">Service</a>
                <a href="">About</a>
            </div>


            <div className='mt-5 md:mt-0'>
                <a>
                    <button className='px-5 py-2 border-blue-600 border-2 rounded font-semibold text-blue-600 hover:bg-blue-200'>Contact Us</button>
                </a>
            </div>

            
        </div>

    </div>
  )
}

export default Navbar