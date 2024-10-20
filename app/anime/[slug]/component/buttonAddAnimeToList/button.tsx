"use client";
import AddAnimeModal from "./addAnimeListModal";
import { useState } from "react";
import { Button } from "../../../../components/mtailwind";

type PropAddAnimeButton ={
    name: string
    isEdit: boolean
    anime:AnimeData
    user:string
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

export default function AddAnimeButton(props:PropAddAnimeButton) {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(!openModal);
    return (
        <>
            <Button 
                onClick={handleOpen} 
                className="bg-pink-500 w-full mt-6">
                <span>{props.name}</span>
            </Button>
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