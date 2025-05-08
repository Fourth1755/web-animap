'use client'
import './seasonalYearBar.scss'
import { GetSeasonalAndYearResponse } from "@/app/service/dtos.ts/common"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Virtual } from 'swiper/modules';
import SwiperCore from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/virtual';
import { useEffect, useRef, useState } from 'react';
import ButtonSeasonYear from './component/buttonSeasonYear';


type Props = {
    seasonalAndYear: GetSeasonalAndYearResponse
    season: string
    year: string
}

let linkSeason = {
  color:`#FFFFFF`
}

let linkSeasonNow={
  color:`#FF1493`
}
export default function SeasonalYearBar(props: Props) {
    const { seasonalAndYear, season, year } = props

    // Ref to store the Swiper instance
    const swiperRef = useRef<SwiperCore | null>(null);

    const findIndexOfSeasonlYear = (seasonalAndYear: GetSeasonalAndYearResponse, season:string, year:string) =>{
      for(let i =0; i<= seasonalAndYear.data.length; i++){
        if(seasonalAndYear.data[i].seasonal == season && seasonalAndYear.data[i].year == year) {
          console.log(i)
          return i
        }
      }
      return 0
    }

    useEffect(()=>{
      let index = findIndexOfSeasonlYear(seasonalAndYear, season, year)
      swiperRef.current?.slideTo(index,0)
    },[season, year])
    return(
      <div>
        <div className='select-season-bar'>
            <Swiper
              slidesPerView={7}
              spaceBetween={20}
              slidesPerGroup={7}
              navigation={true}
              modules={[Pagination,Navigation,Virtual]}
              className="mySwiper"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              virtual
              >
                {seasonalAndYear.data.map((item,index)=>
                  <SwiperSlide 
                    key={index}
                    virtualIndex={index} 
                    className='swiper-slide-season'>
                    <ButtonSeasonYear 
                      item={item} 
                      year={year} 
                      season={season}
                      />
                  </SwiperSlide>
                )}
                <span >Container Start</span>
            </Swiper>
        </div>
      </div>
    )
}