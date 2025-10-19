"use client";
import AddAnimeModal from "./addAnimeListModal";
import { useCallback, useEffect, useState } from "react";
import { CreateAnimeRequest } from "@/app/service/dtos/anime";
import AlertModal from "@/app/components/alertModal/alertModal";
import { useUser } from "@/app/context/userContext";
import { MyAnimeService } from "@/app/service/myAnimeService";
import { GetMyAnimeAnimeDetailByAnimeIdResponse } from "@/app/service/dtos/myAnime";

type PropAddAnimeButton ={
    anime:CreateAnimeRequest
}

export default function AddAnimeButton(props:PropAddAnimeButton) {
    // handle modal and alert
    const [openModal, setOpenModal] = useState(false);
    const [openModalAlert, setOpenModalAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [loadingData, setLoadingData] = useState(true);

    const [myAnimeDetail, setMyAnimeDetail] = useState<GetMyAnimeAnimeDetailByAnimeIdResponse | null>(null);

    const myAnimeService = new MyAnimeService();

    const handleOpen = () => setOpenModal(!openModal);
    const handleOpenAlert = () => setOpenModalAlert(!openModalAlert);
    const handlerResponseMessage = (message:string) => {
        setMessage(message)
        handleOpenAlert()
    }

    const fetchMyAnimeDetail = useCallback((animeId:string) => {
        const myAnimeAnimeDetailResponse = myAnimeService.getMyAnimeAnimeDetailByAnimeId(animeId)
        myAnimeAnimeDetailResponse.then((res)=>{
            setMyAnimeDetail(res);
            setLoadingData(false)
        }).catch((error)=>{
            console.log('Failed to fetch user info:', error);
        })
        
    }, []);

    useEffect(() => {
        setLoadingData(true)
        fetchMyAnimeDetail(props.anime.id)
    },[props.anime.id]);

    const { user, loading, logout } = useUser();
    if (loading&&loadingData) {
        return <div>Loading...</div>;
    }

    if (user == null) {
        return <div></div>
    }

    return (
        <>
            <button 
                onClick={handleOpen} 
                className="bg-[#FF1493] w-full mt-6 rounded-xl p-2 hover:bg-pink-700">
                <span>{myAnimeDetail?.is_watched?"Edit My Score":"Add To List"}</span>
            </button>
            {myAnimeDetail?.is_watched?
                <AddAnimeModal
                    open={openModal}
                    handler={handleOpen}
                    isEdit={true}
                    anime={props.anime}
                    userId={user.uuid}
                    handlerResponseMessage={handlerResponseMessage}
                    myAnime={myAnimeDetail}
                />:
                <AddAnimeModal
                open={openModal}
                handler={handleOpen}
                isEdit={false}
                anime={props.anime}
                userId={user.uuid}
                handlerResponseMessage={handlerResponseMessage}
            />
            }
            <AlertModal
                open={openModalAlert}
                handler={handleOpenAlert}
                message={message}
                />
        </>
    );
}