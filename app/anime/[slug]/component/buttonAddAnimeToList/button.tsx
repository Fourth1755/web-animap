"use client";
import AddAnimeModal from "./addAnimeListModal";
import { useState } from "react";
import { Button } from "../../../../components/mtailwind";
import { CreateAnimeRequest } from "@/app/service/dtos/anime";
import AlertModal from "@/app/components/alertModal/alertModal";
import { useUser } from "@/app/context/userContext";

type PropAddAnimeButton ={
    name: string
    isEdit: boolean
    anime:CreateAnimeRequest
}

export default function AddAnimeButton(props:PropAddAnimeButton) {
    // handle modal and alert
    const [openModal, setOpenModal] = useState(false);
    const [openModalAlert, setOpenModalAlert] = useState(false);
    const [message, setMessage] = useState("");

    const handleOpen = () => setOpenModal(!openModal);
    const handleOpenAlert = () => setOpenModalAlert(!openModal);
    const handlerResponseMessage = (message:string) => {
        setMessage(message)
        handleOpenAlert()
    }

    const { user, loading, logout } = useUser();
    if (loading) {
        return <div>Loading...</div>;
    }

    if (user == null) {
        return <div></div>
    }
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
                userId={user.uuid}
                handlerResponseMessage={handlerResponseMessage}
            />
            <AlertModal
                open={openModalAlert}
                handler={handleOpenAlert}
                message={message}
                />
        </>
    );
}