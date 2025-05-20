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
        <div className="w-2/5 bg-black h-screen pt-16">
            <div>
                <div className="flex justify-center px-5">
                    <h1 className="font-medium text-2xl">{anime.name}</h1>
                </div>
                <div className="h-full">
                <div className="flex justify-center py-2 pt-5">
                    <Link href={`anime/${anime.id}`}>
                        <div className='anime-universe-item-detail' style={{backgroundImage:`url(${anime.image})`}} >
                            
                        </div>
                    </Link>
                </div>
                <p className="cutoff-test-content text-gray-500 mx-10 pt-5">
                    {anime.description}
                </p>
                </div>
            </div>
        </div>
    )
}