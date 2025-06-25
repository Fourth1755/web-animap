import { useState } from "react"

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
    song:SongData
}

export default function SongDetail(props: Props){
    const { song } = props
    const [songChannelList,setSongChannelList] = useState()
    const converAnimeSongType = (type: string) => {
        switch (type) {
            case "TV_SIZE":
                return "TV Size"
            case "FULL_SIZE_OFFICIAL":
                return "Full Size Official"
            case "FULL_SIZE_UNOFFICIAL":
                return "Full Size Unofficial"
            case "FIRST_TAKE":
                return "First Take"
            default:
                return ""
        }
    }

    return (
        <div className="w-2/5 h-screen pt-20 ml-5">
            <div className="bg-black h-full w-full rounded-lg">
                <iframe
                    // width="560"
                    height="208"
                    className="rounded-t-lg w-full"
                    id="player"
                    src={`${song.song_channel[0].link}?autoplay=1&mute=1`}
                    allow="accelerometer; autoplay;"
                    ></iframe>
                <div className="pt-5">
                    <h1 className="px-5 text-3xl font-medium">{song.name}</h1>
                    <h1 className="px-5 text-gray-600">{song.anime_name}</h1>
                    <div className="px-5 pt-5">
                        {/* <h1>Other versions</h1> */}
                        {/* <div>
                            {song.song_channel.map((item,index)=>(
                                <div key={index}>
                                    <h1>{converAnimeSongType(item.type)}</h1>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}