export type AnimeList = {
    id: number;
    name: String;
    episodes:number
    seasonal: String;
    year: String;
    image:String
    score: String;
  }

export type CreateAnimeData = {
    id: number;
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
    id:number
    name:string
}

type GetAnimeByIdResponseStduio = {
    id:string
    name:string
}

export type GetAnimeByIdResponse = {
    id: number,
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