"use client"
import Link from "next/link"
import './universeAnimeList.scss'
import { useState } from "react"
import WallpaperAnime from "@/app/components/wallpaperAnime/wallpaperAnime"

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
type CategoryItem = {
    id: string
    wallpaper:string
    name:string
}

type Props = {
    animes: AnimeItem[];
    handler: (id:string) => void;
    category: CategoryItem
}

let buttonAnime = {
  backgroundColor:`#6F6B6B`
}

let buttonAnimeSelect={
  backgroundColor:`#FF1493`
}

let lineStyle={
  backgroundColor:`#D9D9D9`,
  padding:`2px`
}

export default function UniverseAnimeList(props : Props){
    const { animes, category } = props
    const handleChange = props.handler;
    const [animeIdSelect, setAnimeIdSelect] = useState(animes[0].id);
    const onClieckChangeAnime =(id: string) =>{
        setAnimeIdSelect(id)
        handleChange(id)
    }
    return(
        <div className="w-full h-screen pt-16">
            <div className="overflow-y-scroll h-full">
            <WallpaperAnime link={category.wallpaper} name={category.name}/>
                    <div className='container mx-auto md:px-20 px-5'>
            <div className="py-5">
                <button className="bg-pink-500 rounded-md px-3 py-2 text-sm font-medium w-36 hover:bg-pink-600 text-white">เรียงลำดับ</button>
            </div>
            <div>
                {animes.map((anime,index)=>(
                    <div 
                        key={index} 
                        className="flex cursor-pointer hover:bg-black 0 rounded-lg"
                        onClick={()=>onClieckChangeAnime(anime.id)}>
                        <div className="w-28 pt-4 pl-5 text-white">
                            <h1>{anime.year}</h1>
                            <h1>{anime.seasonal}</h1>
                        </div>
                        <div className="flex flex-col justify-center pl-5">
                            <div className="flex flex-row justify-center h-5">
                                {index!=0?<span style={lineStyle}></span>:<span></span>}
                            </div>
                            <button
                                className="rounded-full p-4"
                                style={anime.id==animeIdSelect?buttonAnimeSelect:buttonAnime}
                                ></button>
                            <div className="flex flex-row justify-center h-full">
                                {index!=animes.length-1?<span style={lineStyle}></span>:<span></span>}
                            </div>
                        </div>
                        <div className="flex w-full ml-16 my-3">
                        <div>
                                <div className='anime-card-item' style={{backgroundImage:`url(${anime.image})`}} >
                                    {/* {anime.user_anime?<h5>Watched</h5>:<></>} */}
                                </div>
                        </div>
                        <div className="flex flex-col justify-between w-full ml-3">
                            <div className="flex flex-col">
                                <h1 className="font-medium text-white">{anime.name}</h1>
                                <p className="text-m font-normal text-gray-600">
                                    {anime.episodes} ep ,{" "}
                                    {anime.duration}</p>
                                <p className="text-m font-normal text-gray-600">Studio: 
                                {anime.studios?.map((item) => (
                                <span className="pl-1 text-gray-600" key={index}>{item.name}</span>
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
        </div>
    </div>
    )
}