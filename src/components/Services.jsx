import React from 'react'
import {FaShip,FaCar} from 'react-icons/fa'
import {MdLocalShipping,MdAirplanemodeActive} from 'react-icons/md'



const Item = ({iconName,title,text})=>{
    return(
        <div className='text-center p-5 flex flex-col items-center shadow-md rounded-md'>
            <div className='text-blue-900'>
            {iconName}
            </div>
            <p className='font-semibold text-2xl text-blue-900 mb-3'>{title}</p>
            <p className='text-lg font-light'>{text}</p>
        </div>
    )

}

function Services() {
    return (
        <div className='container mx-auto py-10' id='service'>
            <div className='text-center py-10'>
                <h1 className='font-light text-6xl mb-4'>Our Services</h1>
                <p className='text-xl  '>What We Provide</p>
            </div>

            <div className='my-[20px] md:flex md:gap-5'>
                <Item title='Ocean Frieght' text='Container ships,both full container and LCL to favorite areas' iconName={<FaShip size={60}/>}/>
                <Item title='Road Freight' text='Container ships,both full container and LCL to favorite areas' iconName={<MdLocalShipping size={60}/>}/>
                <Item title='Air Frieght' text='Container ships,both full container and LCL to favorite areas' iconName={<MdAirplanemodeActive size={60}/>}/>
                <Item title='Car Shipping' text='Container ships,both full container and LCL to favorite areas' iconName={<FaCar size={60}/>}/>
                
            </div>

        </div>
    )
}

export default Services