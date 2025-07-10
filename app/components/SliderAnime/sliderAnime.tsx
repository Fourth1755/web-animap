'use client'
import Link from "next/link"
import React, { useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './sliderAnime.scss'
// import AddAnimeModal from "../AddAnimeModal";

type Anime = {
    id: string;
    name: String;
    episodes:number
    seasonal: String;
    year: String;
    image:String
    score: String;
  }

interface IAnime  {
    id: string
    name: string
    image: string
}
interface ISliderAnime{
    tagAnime :string
    animeList:any[]
    myAnimeListId: number[]
}
const SliderAnime=({tagAnime,animeList,myAnimeListId}: ISliderAnime)=>{
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
                <div className='container mx-auto md:px-5 pt-5 bg'>
                    <h2 className='font-medium text-xl'>{tagAnime}</h2>
                </div>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={20}
                    slidesPerGroup={7}
                    navigation={{nextEl:'',prevEl:''}}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    id="swiper-anime"
                    >
                    {animeList?.map((item :IAnime)=>
                    <SwiperSlide key={item.id}  onClick={()=>handleOpen(item)}>
                        <Link href={`anime/${item.id}`}>
                        <div className='swiper-slide-anime' style={{backgroundImage:`url(${item.image})`}} >
                            {/* {myAnimeListId.includes(item.id)?<h5>Watched</h5>:<></>} */}
                        </div>
                        </Link>
                    </SwiperSlide>
                    )}
                </Swiper>
                
            </div>
            {/* <AddAnimeModal open={open} onClose={handleClose} anime={modalAnime}/> */}
        </>
        
    )
}
export default SliderAnime;