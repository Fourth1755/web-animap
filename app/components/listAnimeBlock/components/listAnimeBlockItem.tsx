import Link from "next/link";
import "./listAnimeBlockItem.scss"
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
}

type Props = {
    anime: AnimeItem;
}

export default function ListAnimeBlockItem(props :Props) {
    const { anime } = props
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
                    <p className="text-m font-normal text-gray-600">
                        {anime.episodes} ep ,{" "}
                        {anime.duration}</p>
                    <p className="text-m font-normal text-gray-600">Studio: 
                    {anime.studios?.map((item) => (
                  <Link key={item.id} href={`/studio/${item.id}`}>
                    <p className="pl-1 text-white">{item.name}</p>
                  </Link>
                ))}
                    </p>
                </div>
                <div className="flex">
                    <button className="bg-pink-500 rounded-md px-3 py-2 text-sm font-medium w-full">ADD TO LIST</button>
                </div>
            </div>
        </div>
    )
}