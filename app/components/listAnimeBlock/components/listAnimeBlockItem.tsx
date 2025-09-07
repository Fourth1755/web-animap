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
    isShowStudio:boolean;
}

export default function ListAnimeBlockItem(props :Props) {
    const { anime , user,isShowStudio } = props
    
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
                        {anime.episodes} ep 
                        {anime.duration?<span>,{" "} {anime.duration}</span>:<></>}
                    </span>
                    {isShowStudio?                    
                    <div className="flex">
                        <p className="pr-2 text-gray-600">Studio:</p>
                        <div>
                            {anime.studios.map((item,index) => (
                            <Link key={item.id} href={`/studio/${item.id}`}>
                                <p className="pl-1 text-gray-500 w-full whitespace-nowrap">{item.name} {anime.studios.length-1==index?<></>:<>,</>}</p>
                            </Link>
                            ))}
                        </div>
                    </div>:<></>}
                </div>
                <div className="flex">
                    <AddAnimeButton name="ADD TO LIST" isEdit={false} anime={anime} user={user}/>
                </div>
            </div>
        </div>
    )
}