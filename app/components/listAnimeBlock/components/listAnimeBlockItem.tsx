import Link from "next/link";
import "./listAnimeBlockItem.scss"
import AddAnimeButton from "./buttonAddAnimeToList/button";
type UserAnime = {
    user_watched: boolean
    user_watched_year: string
    user_score: string
}
type Studio = {
    id :string
    name: string
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
    anime: AnimeItem;
    user:string
}

export default function ListAnimeBlockItem(props :Props) {
    const { anime , user } = props
    
    return (
        <div className="flex justify-between m-2 p-1 bg-black">
            <div className="flex">
                <Link href={`/anime/${anime.id}`}>
                        <div className='anime-card-item' style={{backgroundImage:`url(${anime.image})`}} >
                            {anime.user_anime?<h5>Watched</h5>:<></>}
                        </div>
                </Link>
            </div>
            <div className="flex flex-col justify-between w-full ml-3">
                <div className="flex flex-col">
                    <h1 className="font-medium">{anime.name}</h1>
                    <span className="text-m font-normal text-gray-600">
                        {anime.episodes} ep ,{" "}
                        {anime.duration}</span>
                    <span className="text-m font-normal text-gray-600">Studio: 
                    {anime.studios?.map((item) => (
                  <Link key={item.id} href={`/studio/${item.id}`}>
                    <p className="pl-1 text-white">{item.name}</p>
                  </Link>
                ))}
                    </span>
                </div>
                <div className="flex">
                    <AddAnimeButton name="ADD TO LIST" isEdit={false} anime={anime} user={user}/>
                </div>
            </div>
        </div>
    )
}