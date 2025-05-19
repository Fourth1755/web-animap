import Link from "next/link"
import './universeAnimeDetail.scss'
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
    const { anime } = props
    return(
        <div className="w-2/5 bg-black h-full pb-10">
            <div className="flex justify-center py-2">
                <h1 className="font-medium text-2xl">{anime.name}</h1>
            </div>
            <div className="flex justify-center py-2">
                <Link href={`anime/${anime.id}`}>
                    <div className='anime-universe-item-detail' style={{backgroundImage:`url(${anime.image})`}} >
                        
                    </div>
                </Link>
            </div>
            <p className="text-gray-500 mx-5 text-sm">
                {anime.description}
            </p>
        </div>
    )
}