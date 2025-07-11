import ListAnimeBlockItem from "./components/listAnimeBlockItem";

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
    user_anime: UserAnime
    wallpaper: string
}

type Props = {
    animes: AnimeItem[];
    user:string
}

export default function ListAnimeBlock(props :Props) {
    const { animes, user } = props
    return (
        <div className="container lg:mx-auto pt-10">
            <div className="grid grid-cols-3 gap-2">
                {animes?.map((item, index)=>(
                    <ListAnimeBlockItem anime={item} key={index} user={user}/>
                ))}
            </div>
        </div>
    )
}