import { MyAnimeService } from "@/app/service/myAnimeService";

type AddAnimeToListRequest = {
    user_uuid:string
    anime_id: number
    score: number
    status: number
}

export default async function AddAnimeToList(req:AddAnimeToListRequest){
    const myAnimeService = new MyAnimeService();
    const res = await myAnimeService.addAnimeToList(req)
}