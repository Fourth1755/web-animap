"use client"

import { useEffect, useState } from "react"
import SongList from "../songList/songList"
import { GetSongsByArtistResponse } from "@/app/service/dtos/song"
import SongDetail from "../songDetail/songDetail"
type UserAnime = {
    user_watched: boolean
    user_watched_year: string
    user_score: string
}

type Studio = {
    id:string
    name:string
}

type SongChannelData ={
    id:string
    channel: string
    type:string
    link:string
    is_main:boolean
}

type SongData = {
    id:string
    name:string
    image: string
    year: string
    description: string
    anime_name: string
    type:string
    sequence:number
    song_channel:SongChannelData[]
}

type Props = {
    songList: GetSongsByArtistResponse
}

export default function SongListAndSongDetail(props:Props) {
    const [songShow,setSongShow] = useState<SongData>(props.songList.songs[0])
    const [songIdSelect, setSongIdSelect] = useState(props.songList.songs[0].id);
    const handleChange = (id:string) => setSongIdSelect(id);
    useEffect(()=>{
        var songFilter = props.songList.songs.filter(item=>item.id==songIdSelect)
        setSongShow(songFilter[0])
    },[songIdSelect])
    return(
        <div className="flex">
            <SongList songList={props.songList} handler={handleChange} />
            <SongDetail song={songShow}/>
        </div>
    )
}