"use client";
import EditTopAnimeModal from "./editTopAnimeModal";
import { useState } from "react";
import { Button } from "../../../../components/mtailwind";
import { GetMyAnimeByUserUUIDResponse } from "@/app/service/dtos/myAnime";

type PropEditTopAnimeButton ={
    name: string
    user:string
    myAnimeList:GetMyAnimeByUserUUIDResponse[]
}

type AnimeData = {
    id:number
    name: string;
    name_english: string
    episodes: number
    seasonal: string;
    image: string
    description: string
    duration: string
    year: string;
    type: number
    wallpaper: string;
}

export default function EditTopAnimeButton (props:PropEditTopAnimeButton) {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(!openModal);
    return (
        <>
            <h1 
                className="text-pink-400 cursor-pointer"
                onClick={handleOpen} >
                    <span>{props.name}</span></h1> 
            <EditTopAnimeModal
                open={openModal}
                handler={handleOpen}
                user={props.user}
                myAnimeList={props.myAnimeList}
            />
        </>
    );
}