import { SwiperSlide } from 'swiper/react';
import { Slider } from "./slider"
import { skills } from "../lib/data";

import { Card } from "./card";

export const CardList = ({hardSkills}) => (
  <>
    <Slider>
      {
        hardSkills ? 
        skills.hardSkills.map((ele, i) => (    
          <SwiperSlide key={i}>
            <Card ele={ele}/>
          </SwiperSlide>
        )) : skills.softSkills.map((ele, i) => (    
          <SwiperSlide key={i}>
            <Card ele={ele}/>
          </SwiperSlide>
        ))
      }
    </Slider>
  </>
) 