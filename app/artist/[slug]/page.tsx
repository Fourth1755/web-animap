"use server"
import { SongSerivce } from "@/app/service/songService"
import SongListAndSongDetail from "./component/songListAndSongDetail/songListAndSongDetail";


type Props = {
    params: { slug: string }
}

export default async function Page({ params }: Props){
    const songService = new SongSerivce();
    const songListResponse = await songService.getSongsByArtistId(params.slug)

    return(
        <div className="container mx-auto">
            <SongListAndSongDetail songList={songListResponse}/>
        </div>
    )
}