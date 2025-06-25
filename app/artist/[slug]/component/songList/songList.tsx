import { GetSongsByArtistResponse } from "@/app/service/dtos/song"
import SongItem from "./songItem"

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
    handler: (id:string)=>void
}


export default function SongList(props:Props) {
    const { songList } = props
    const songs = songList.songs
    const artist = songList.aritst
    const handleChange = props.handler
    let dropzoneStyle = {
        width: `280px`,
        height: `280px`,
        backgroundImage: `url(${artist.image})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`,
    };
    return (
        <div className="w-full h-screen pt-20">
            <div className="w-full h-full overflow-y-scroll">
                <div className="flex">
                    <div className="w-1/3">
                        <div style={dropzoneStyle} className="rounded-lg"></div>
                    </div>
                    <div className="mr-3 w-2/3 bg-black rounded-lg">
                        <div className="p-5">
                            <h1 className="text-7xl font-medium">{artist.name}</h1>
                        </div>
                    </div>
                </div>
                <div className="mr-3">
                    {songs.map((item,index)=>(
                        <div key={index} onClick={()=>handleChange(item.id)}>
                            <SongItem 
                                song={item} 
                                songNumber={index+1} 
                                />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}