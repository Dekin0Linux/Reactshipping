import React from 'react'


const Card=({img})=>{
  return(
    <div className='rounded-lg shadow-2xl overflow-hidden group'>
      <div className='w-ful overflow-hidden'>
        <img src={img} alt="" className='object-contain w-[100%] group-hover:scale-[180%] group-hover:transition-all' />
      </div>

      <div className='p-4'>
        <div className='flex justify-between'>
          <p className='font-semibold text-gray-600 text-xl'>Jakarta - Manado</p>
          <p>Free Pick Up</p>
        </div>
      </div>
    </div>
  )
  
}

function Featured() {
  return (
    <div className='container md:mx-auto  w-full'>
      <div className='md:flex justify-between items-center my-10 mx-10'>
        <div>
          <p>Feature</p>
          <h1 className='font-bold text-4xl'>Shipping</h1>
        </div>

        <a href="#">
          <button className='px-20 py-3 bg-blue-900 font-semibold text-white rounded-md my-5 md:my-0'>View All</button>
        </a>
      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mx-10'>
        <Card img='https://images.unsplash.com/photo-1605732562742-3023a888e56e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' />
        <Card img='https://images.unsplash.com/photo-1600633532411-13ed06f7bcc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'/>
        <Card img='https://images.unsplash.com/photo-1615044606239-76ef89b01a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'/>
      </div>
    </div>
  )
}

export default Featured