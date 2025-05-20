"use client"

import { useEffect, useState } from "react"
import UniverseAnimeList from "../universeAnimeList/universeAnimeList"
import UniverseAnimeDetail from "../universeAnimeDetail/universeAnimeDetail"
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
    studios: Studio[]
    description: string
    user_anime: UserAnime
}
type CategoryItem = {
    id: string
    wallpaper:string
    name:string
}
type Props = {
    animes: AnimeItem[];
    category:CategoryItem
}

export default function AnimeListAndAnimeDetail(props:Props) {
    const { animes ,category } = props
    const [animeShow,setAnimeShow] = useState<AnimeItem>(animes[0])
    const [animeIdSelect, setAnimeIdSelect] = useState(animes[0].id);
    const handleChange = (id:string) => setAnimeIdSelect(id);
    useEffect(()=>{
        var animeFilter = animes.filter(item=>item.id==animeIdSelect)
        setAnimeShow(animeFilter[0])
    },[animeIdSelect])
    return(
        <div className="flex">
            <UniverseAnimeList animes={animes} handler={handleChange} category={category} />
            <UniverseAnimeDetail anime={animeShow}/>
        </div>
    )
}