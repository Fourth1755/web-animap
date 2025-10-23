'use client'
import Link from "next/link"
import React, { useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './sliderMyAnime.scss'
// import AddAnimeModal from "../AddAnimeModal";

import { GetMyAnimeByUserUUIDResponse, GetMyAnimeYearByUserUUIDResponseAnimeYearAnime } from "../../../../service/dtos/myAnime";

type SliderMyAnime ={
    tag :string
    animeList: GetMyAnimeYearByUserUUIDResponseAnimeYearAnime[]
}

const SliderMyAnime=({tag,animeList}: SliderMyAnime)=>{

    return(
        <>
            <div className="pt-5">
                <h2 className="py-3">{tag}</h2>
                <div className="grid xl:grid-cols-7 lg:grid-cols-5 sm:grid-cols-4 grid-cols-6 gap-y-3">
                    {animeList?.map((item ,index)=>
                    <div 
                        key={index}  
                        // onClick={()=>handleOpen(item)}
                        >
                        <Link href={`/anime/${item.anime_id}`}>
                        <div className='swiper-slide-anime' style={{backgroundImage:`url(${item.image})`}} >
                        </div>
                        </Link>
                    </div>)}
                </div>
            </div>
        </>
        
    )
}
export default SliderMyAnime;