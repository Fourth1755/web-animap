"use client";
import AddAnimeModal from "./addAnimeListModal";
import { useState } from "react";
import { Button } from "../../../../components/mtailwind";
import { CreateAnimeRequest } from "@/app/service/dtos/anime";

type PropAddAnimeButton ={
    name: string
    isEdit: boolean
    anime:CreateAnimeRequest
    user:string
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