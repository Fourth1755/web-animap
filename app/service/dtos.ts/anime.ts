export type GetAnimeListResponse = {
    id: string;
    name: string;
    episodes:number
    seasonal: string;
    year: string;
    image:string
    score: string;
}

export type GetAnimesByCategoryResponse = {
    id: string;
    name: string;
    episodes:number
    seasonal: string;
    year: string;
    image:string
    score: string;
}

export type CreateAnimeRequest = {
    id: string;
    name: string;
    name_english: string
    episodes: number
    seasonal: string;
    image: string
    description: string
    duration: string
    year: string;
    type: number
    wallpaper: string
};

export type UpdateAnimeRequest = {
    id: string;
    name: string;
    name_english: string
    episodes: number
    seasonal: string;
    image: string
    description: string
    duration: string
    year: string;
    type: number
};

type GetAnimeByIdResponseCategories = {
    id:string
    name:string
}

type GetAnimeByIdResponseStduio = {
    id:string
    name:string
}

type GetAnimeByIdResponseUniverse = {
    id:string
    name:string
}

export type GetAnimeByIdResponse = {
    id: string,
    name: string,
    name_english:string
    year: string,
    score: string,
    seasonal: string
    episodes: number
    image:string
    description:string
    type:number
    duration:string
    categories:GetAnimeByIdResponseCategories[],
    studios: GetAnimeByIdResponseStduio[],
    wallpaper: string
    trailer: string
    trailer_embed: string
    universe: 
}

export type GetAnimesBySeasonalAndYearRequest = {
    seasonal: string;
    year: string;
}

type GetAnimesBySeasonalAndYearResponseStduio = {
    id:string
    name:string
}

type GetAnimesBySeasonalAndYearResponseUserAnime = {
    user_watched: boolean
    user_watched_year: string
    user_score: string
}

type GetAnimesBySeasonalAndYearResponseAnimeList= {
    id: string;
    name: string;
    episodes:number
    seasonal: string;
    year: string;
    image:string
    score: string;
    duration: string;
    studios: GetAnimesBySeasonalAndYearResponseStduio[],
    // รอเอามาเพิ่ม ไว้เช็คว่าคนนี้ดูเรื่องนี้ยัง
    user_anime: GetAnimesBySeasonalAndYearResponseUserAnime
}
export type GetAnimesBySeasonalAndYearResponse = {
    year: string
    seasonal: string
    anime_list: GetAnimesBySeasonalAndYearResponseAnimeList[]
}