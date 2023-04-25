import React from 'react'

function Footer() {
  return (
    <div className='container md:mx-auto'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-10 my-20 mx-5'>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/7245/7245083.png" alt="logo" className='object-cover w-32'/>
            <p>Delivering Reliability <br />Right on time</p>
          </div>

          <div>
            <h2 className='mb-10 font-bold md:text-2xl text-xl'>Company</h2>

            <a href=""><p className='font-semibold text-xl'>About</p></a>
            <a href=""><p className='font-semibold text-xl'>Services</p></a>
            <a href=""><p className='font-semibold text-xl'>Tracking</p></a>
          </div>

          <div>
            <h2 className='mb-10 font-bold md:text-2xl text-xl'>Support</h2>

            <a href=""><p className='font-semibold text-xl'>Contct Us</p></a>
            <a href=""><p className='font-semibold text-xl'>Terms of Service</p></a>
            <a href=""><p className='font-semibold text-xl'>Privacy Policy</p></a>
          </div>

          <div>
            <h2 className='mb-10 font-bold md:text-2xl text-xl'>Contact</h2>

            <a href=""><p className='font-semibold text-xl'>Yogyakarata,</p></a>
            <a href=""><p className='font-semibold text-xl'>(021) 999 9999</p></a>
            <a href=""><p className='font-semibold text-xl'>Ship@gmail.com</p></a>
          </div>

        </div>
    </div>
  )
}

export default Footer