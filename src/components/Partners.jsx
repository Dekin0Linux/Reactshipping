import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from "swiper";

function Partners() {
  return (
  <div className='container md:mx-auto md:py-10'>
    <Swiper 
            className='my-20 text-center'
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay]}
          >
            <SwiperSlide>
                <img src="https://cdn.logojoy.com/wp-content/uploads/2018/08/23162126/94.png" alt="" className='object-cover'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.logojoy.com/wp-content/uploads/2018/08/23162124/16-3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.logojoy.com/wp-content/uploads/2018/08/23162118/19-31.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.pinimg.com/originals/55/8c/a2/558ca2e6bcebe02452ef7969a6ad0d33.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.logojoy.com/wp-content/uploads/2018/08/23162120/7-4.png" alt="" />
            </SwiperSlide>
            <SwiperSlide><img src="https://cdn.logojoy.com/wp-content/uploads/2018/08/23162051/grey-001-1024x776.png" alt="" /></SwiperSlide>
          </Swiper>
  </div>
  )
}

export default Partners