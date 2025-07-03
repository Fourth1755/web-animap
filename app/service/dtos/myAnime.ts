export type GetMyAnimeByUserUUIDResponse = {
    id:string
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

export type AddAnimeToListRequest = {
    user_uuid:string
    anime_id: string
    score: number
    status: number
    watched_year: string
}

export type GetMyTopAnimeByUserUUIDResponse = {
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

export type GetMyAnimeYearByUserUUIDResponseAnimeYearAnime = {
    id:string
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
    year: string;
    anime: GetMyAnimeYearByUserUUIDResponseAnimeYearAnime[]
}

export type GetMyAnimeYearByUserUUIDResponse = {
    anime_year: GetMyAnimeYearByUserUUIDResponseAnimeYear[]
    total_year: number;
    total_anime: number;
}