type GetMyAnimeByUserUUIDResponse = {
    id:number
    name: string;
    name_english: string
    episodes: number
    seasonal: string;
    image: string
    description: string
    duration: string
    year: string;
    type: number
    wallpaper: string;
}

type AddAnimeToListRequest = {
    user_uuid:string
    anime_id: number
    score: number
    status: number
}

type GetMyTopAnimeByUserUUIDResponse = {
    id:number
    anime_name: string;
    name_english: string
    episodes: number
    seasonal: string;
    image: string
    description: string
    duration: string
    year: string;
    type: number
    wallpaper: string;
}
type GetMyAnimeYearByUserUUIDResponseAnimeYearAnime = {
    id:number
    name: string;
    name_english: string
    episodes: number
    seasonal: string;
    image: string
    description: string
    duration: string
    year: string;
    type: number
    wallpaper: string;
}

type GetMyAnimeYearByUserUUIDResponseAnimeYear ={
    year:string;
    anime: GetMyAnimeYearByUserUUIDResponseAnimeYearAnime[]
}

type GetMyAnimeYearByUserUUIDResponse = {
    anime_year: GetMyAnimeYearByUserUUIDResponseAnimeYear[]
    total_year: number;
    total_anime: number;
}