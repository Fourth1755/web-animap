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
}