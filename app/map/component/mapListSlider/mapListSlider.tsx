'use client'
import Link from "next/link"
import React, { useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './mapListSlider.scss'
import ChagePageAnimeMap from "./action";

import { UserInfo } from "@/app/service/dtos/user";

type MapItem = {
    id: string
    name: string
    image: string
    map_path: string
}

type Props = {
    mapList: MapItem[],
    user: UserInfo | null,
    loading: boolean,
    handleOpen: () => void;
}
export default function MapListSlider(props: Props) {
    const { mapList, user, loading, handleOpen } = props

    const handleChagePageAnimeMap = (mapPath:string) => {
        if (!loading && !user) {
            handleOpen()
        } else {
            ChagePageAnimeMap(mapPath)
        }
    }

    return(
        <>
            <div className="slide-anime-header">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    id="swiper-anime"
                    >
                    {mapList?.map((item :MapItem)=>
                    <SwiperSlide key={item.id}>
                        <div onClick={()=>handleChagePageAnimeMap(item.map_path)}>
                            <h1 className="text-center py-5">{item.name}</h1>
                            <div className='swiper-slide-map' style={{backgroundImage:`url(${item.image})`}} >
                            </div>
                        </div>
                    </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </>
    )
