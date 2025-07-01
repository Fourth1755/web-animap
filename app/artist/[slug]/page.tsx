"use server"
import { SongSerivce } from "@/app/service/songService"
import SongListAndSongDetail from "./component/songListAndSongDetail/songListAndSongDetail";


type Props = {
    params: Promise<{ slug: string }>
}

export default async function Page(props: Props) {
    const params = await props.params;
    const songService = new SongSerivce();
    const songListResponse = await songService.getSongsByArtistId(params.slug)

    return(
        <div className="container mx-auto">
            <SongListAndSongDetail songList={songListResponse}/>
        </div>
    )
}