'use client'

import React, { useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './sliderAnime.scss'
import { IAnime,ISliderAnime } from "./sliderAnime.interface";
// import AddAnimeModal from "../AddAnimeModal";

const SliderAnime=({tagAnime,animeList,myAnimeList}: ISliderAnime)=>{
    const nameOfMyAnimeList=myAnimeList.map((item: IAnime)=>item.name)
    const [modalAnime,setModalAnime]=useState({})

    const [open, setOpen] = useState(false);
    const handleOpen = (item :IAnime) => {
        setModalAnime(item)
        setOpen(true);
    }
    const handleClose = () =>setOpen(false);

    return(
        <>
            <div className="slide-anime-header">
                <h2>{tagAnime}</h2>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={20}
                    slidesPerGroup={7}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    id="swiper-anime"
                    >
                    {animeList.map((item :IAnime)=>
                    <SwiperSlide key={item.id}  onClick={()=>handleOpen(item)}>
                        <div className='swiper-slide-anime' style={{backgroundImage:`url(${item.image})`}}>
                            {nameOfMyAnimeList.includes(item.name)?<h5>Watched</h5>:<></>}
                        </div>
                    </SwiperSlide>
                    )}
                </Swiper>
                
            </div>
            {/* <AddAnimeModal open={open} onClose={handleClose} anime={modalAnime}/> */}
        </>
        
    )
}
export default SliderAnime;