"use client";
import AddAnimeModal from "./addAnimeListModal";
import { useState } from "react";
import { Button } from "../../../../components/mtailwind";
import { CreateAnimeRequest } from "@/app/service/dtos/anime";

type AnimeItem = {
    id: string;
    name: string;
    episodes:number
    seasonal: string;
    year: string;
    image:string
    score: string;
    duration: string
    wallpaper: string
}

type PropAddAnimeButton ={
    name: string
    isEdit: boolean
    anime:AnimeItem
    user:string
}

export default function AddAnimeButton(props:PropAddAnimeButton) {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(!openModal);
    return (
        <>
            <button 
                className="bg-pink-500 rounded-md px-3 py-2 text-sm font-medium w-full"
                onClick={handleOpen} 
                >
                <span>{props.name}</span>
                </button>
            <AddAnimeModal
                open={openModal}
                handler={handleOpen}
                isEdit={props.isEdit}
                anime={props.anime}
                user={props.user}
            />
        </>
    );
}