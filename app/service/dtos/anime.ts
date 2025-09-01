export type GetAnimeListResponse = {
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
    name_thai: string
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
    category_universe: GetAnimeByIdResponseUniverse[]
    my_anime_list_score: number
    source: string   
}

export type GetAnimesBySeasonalAndYearRequest = {
    seasonal: string;
    year: string;
}

type Stduio = {
    id:string
    name:string
}

type UserAnime = {
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
    wallpaper: string;
    studios: Stduio[]
    // รอเอามาเพิ่ม ไว้เช็คว่าคนนี้ดูเรื่องนี้ยัง
    user_anime: UserAnime
}

export type GetAnimesBySeasonalAndYearResponse = {
    year: string
    seasonal: string
    anime_list: GetAnimesBySeasonalAndYearResponseAnimeList[]
}

type GetAnimesByCategoryResponseAnimeList= {
    id: string;
    name: string;
    episodes:number
    seasonal: string;
    year: string;
    image:string
    score: string;
    duration: string;
    wallpaper: string
    studios: Stduio[],
    // รอเอามาเพิ่ม ไว้เช็คว่าคนนี้ดูเรื่องนี้ยัง
    user_anime: UserAnime
}

export type GetAnimesByCategoryResponse = {
    id: string
    name: string
    wallpaper: string
    anime_list: GetAnimesByCategoryResponseAnimeList[]
}

type GetAnimesByCategoryUniverseResponseAnimeList= {
    id: string;
    name: string;
    episodes:number
    seasonal: string;
    year: string;
    image:string
    score: string;
    duration: string;
    description: string;
    studios: Stduio[],
    // รอเอามาเพิ่ม ไว้เช็คว่าคนนี้ดูเรื่องนี้ยัง
    user_anime: UserAnime
}

export type GetAnimesByCategoryUniverseResponse = {
    id: string
    name: string
    wallpaper: string
    anime_list: GetAnimesByCategoryUniverseResponseAnimeList[]
}

type GetAnimesByStudioResponseAnimeList = {
    id: string;
    name: string;
    episodes:number
    seasonal: string;
    year: string;
    image:string
    score: string;
    duration: string;
    description: string;
    wallpaper: string
    studios: Stduio[],
    // รอเอามาเพิ่ม ไว้เช็คว่าคนนี้ดูเรื่องนี้ยัง
    user_anime: UserAnime
}

export type GetAnimesByStudioResponse = {
    id: string
    name: string
    wallpaper: string
    main_color: string
    anime_list: GetAnimesByStudioResponseAnimeList[]
}