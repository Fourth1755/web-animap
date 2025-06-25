
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
    anime_wallpaper: string
    type:string
    sequence:number
    song_channel:SongChannelData[]
}
type Prpos = {
    song:SongData
    songNumber:number
}
export default function SongItem(props: Prpos){
    const { song, songNumber } = props
    let dropzoneStyle = {
        width: `100%`,
        height: `160px`,
        backgroundImage: `url(${song.anime_wallpaper})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`,
    };
    return (
        <div className="bg-black relative rounded-lg">
            <div style={dropzoneStyle} className="rounded-lg my-3 opacity-40 hover:opacity-60">
            </div>
            <div className="flex absolute top-0 left-0 h-full">
                <div className="w-16 items-center justify-center flex">
                    <h1 className="font-semibold text-2xl">{songNumber}</h1>
                </div>
                <div className="flex flex-col pt-5">
                    <h1 className="font-semibold text-2xl">{song.name}</h1>
                    <h1 className="text-gray-400">{song.anime_name}</h1>
                </div>
            </div>
        </div>

    )
}