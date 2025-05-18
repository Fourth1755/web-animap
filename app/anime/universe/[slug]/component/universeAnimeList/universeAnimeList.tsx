"use client"
import Link from "next/link"
import './universeAnimeList.scss'
import { useState } from "react"

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
    animes: AnimeItem[];
    handler: (id:string) => void;
}

let buttonAnime = {
  backgroundColor:`#FFFFFF`
}

let buttonAnimeSelect={
  backgroundColor:`#FF1493`
}

export default function UniverseAnimeList(props : Props){
    const { animes } = props
    const handleChange = props.handler;
    const [animeIdSelect, setAnimeIdSelect] = useState(animes[0].id);
    const onClieckChangeAnime =(id: string) =>{
        setAnimeIdSelect(id)
        handleChange(id)
    }
    return(
        <div className="container mx-auto md:px-40 px-5">
            <div>
                <button>เรียงลำดับ</button>
            </div>
            <div>
                {animes.map((anime,index)=>(
                    <div key={index} className="flex">
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-row justify-center h-full">
                                {index!=0?<span className="bg-white p-1 w-3"></span>:<span></span>}
                            </div>
                            <button
                                className="rounded-full p-4 m-1"
                                style={anime.id==animeIdSelect?buttonAnimeSelect:buttonAnime}
                                onClick={()=>onClieckChangeAnime(anime.id)}></button>
                            <div className="flex flex-row justify-center h-full">
                                {index!=animes.length-1?<span className="bg-white p-1 w-3"></span>:<span></span>}
                            </div>
                        </div>
                        <div className="flex w-full rounded-md border-black border-2 ml-16 my-5">
                        <div>
                            <Link href={`/anime/${anime.id}`}>
                                <div className='anime-card-item' style={{backgroundImage:`url(${anime.image})`}} >
                                    {/* {anime.user_anime?<h5>Watched</h5>:<></>} */}
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col justify-between w-full ml-3">
                            <div className="flex flex-col">
                                <h1 className="font-medium">{anime.name}</h1>
                                <p className="text-m font-normal text-gray-600">
                                    {anime.year} {anime.seasonal} ,{" "}
                                    {anime.episodes} ep ,{" "}
                                    {anime.duration}</p>
                                <p className="text-m font-normal text-gray-600">Studio: 
                                {anime.studios?.map((item) => (
                            <Link key={item.id} href={`studio/${item.id}`}>
                                <p className="pl-1 text-white">{item.name}</p>
                            </Link>
                            ))}
                                </p>
                            </div>
                        </div>
                        {/* <div className="flex flex-col justify-center">
                            <button className="bg-pink-500 rounded-md px-3 py-2 text-sm font-medium w-36">ADD TO LIST</button>
                        </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}