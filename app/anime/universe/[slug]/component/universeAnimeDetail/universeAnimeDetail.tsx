"use client"
import Link from "next/link"
import './universeAnimeDetail.scss'
import { AnimeService } from "@/app/service/animeService"
import { useCallback, useEffect, useState } from "react"
import { GetAnimeByIdResponse } from "@/app/service/dtos/anime"
type UserAnime = {
    user_watched: boolean
    user_watched_year: string
    user_score: string
}

type Studio = {
    id:string
    name:string
}

type AnimeItem = {
    id: string;
    name: string;
    episodes:number
    seasonal: string;
    year: string;
    image:string
    score: string;
    duration: string
    description: string
    studios: Studio[]
    user_anime: UserAnime
}

type Props = {
    anime: AnimeItem
}

export default function UniverseAnimeDetail(props : Props) {
    const animeService = new AnimeService();
    const [animeShow, setAnimeShow] = useState<GetAnimeByIdResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const fetchAnime = useCallback((animeId:string) => {
        //setLoading(true);
        const animeResponse =  animeService.getAnime(animeId);
        animeResponse.then((res)=>{
            setAnimeShow(res);
        }).catch((error)=>{
            console.log('Failed to fetch user info:', error);
        }).finally(()=>setLoading(false))
    }, []);

    useEffect(() => {
        setLoading(true)
        fetchAnime(props.anime.id)
    },[props.anime.id]);
    return(
        <div className="w-2/5 bg-black h-screen pt-16">
            <div className="overflow-y-scroll h-full pt-5 pb-10">
            {!loading?<div>
                <div className="flex justify-center px-5">
                    <h1 className="font-medium text-2xl">{animeShow?.name}</h1>
                </div>
                <div className="h-full">
                <div className="flex justify-center py-2 pt-5">
                    <Link href={`anime/${animeShow?.id}`}>
                        {/* <div className='anime-universe-item-detail' style={{backgroundImage:`url(${animeShow?.image})`}} >                            
                        </div> */}
                        <img
                            className="rounded-lg shadow-xl shadow-gray-900/50"
                            src={animeShow?.image}                
                            alt="nature image"
                            width={256}
                            height={384}
                            />
                    </Link>
                </div>
                <p className="cutoff-test-content text-gray-500 mx-10 pt-5">
                    {animeShow?.description}
                </p>
                </div>
            </div>:<h1>Loading ...</h1>
            }
            </div>
        </div>
    )
}