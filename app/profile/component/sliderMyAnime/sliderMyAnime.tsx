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

type Anime = {
    id: number;
    name: String;
    episodes:number
    seasonal: String;
    year: String;
    image:String
    score: String;
  }

interface IAnime  {
    anime_id:number
    name: string
    image: string
}
interface ISliderMyAnime{
    tag :string
    animeList:any[]
}
const SliderMyAnime=({tag,animeList}: ISliderMyAnime)=>{
    const [modalAnime,setModalAnime]=useState({})

    const [open, setOpen] = useState(false);
    const handleOpen = (item :IAnime) => {
        //setModalAnime(item)
        //setOpen(true);
    }
    const handleClose = () =>setOpen(false);

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
                    {animeList?.map((item :IAnime)=>
                    <SwiperSlide key={item.anime_id}  onClick={()=>handleOpen(item)}>
                        <Link href={`anime/${item.anime_id}`}>
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