import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper } from 'swiper/react';

export const Slider = ({children}) => {
  return (
    <div className="flex justify-center">
      <Swiper
      // install Swiper modules
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
       {children}
      </Swiper>    
    </div>
  )
}