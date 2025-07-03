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

import { GetMyAnimeByUserUUIDResponse } from "../../../../service/dtos/myAnime";

type SliderMyAnime ={
    tag :string
    animeList: AnimeDataItem[]
}

type AnimeDataItem = {
    id: string;
    name: string;
    name_english: string;
    episodes: number;
    seasonal: string;
    image: string;
    description: string;
    duration: string;
    year: string;
    type: number;
    wallpaper: string;
}

const SliderMyAnime=({tag,animeList}: SliderMyAnime)=>{
    // const [modalAnime,setModalAnime]=useState({})

    // const [open, setOpen] = useState(false);
    // const handleOpen = (item :IAnime) => {
    //     //setModalAnime(item)
    //     //setOpen(true);
    // }
    // const handleClose = () =>setOpen(false);

    return(
        <>
            <div className="slide-anime-header">
                <h2>{tag}</h2>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={20}
                    slidesPerGroup={7}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    id="swiper-anime"
                    >
                    {animeList?.map((item :AnimeDataItem)=>
                    <SwiperSlide 
                        key={item.id}  
                        // onClick={()=>handleOpen(item)}
                        >
                        <Link href={`anime/${item.id}`}>
                        <div className='swiper-slide-anime' style={{backgroundImage:`url(${item.image})`}} >
                            
                        </div>
                        </Link>
                    </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </>
        
    )
}
export default SliderMyAnime;