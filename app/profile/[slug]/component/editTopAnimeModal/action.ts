import { AddAnimeToListRequest } from "@/app/service/dtos/myAnime";
import { MyAnimeService } from "@/app/service/myAnimeService";

export default async function AddAnimeToList(req:AddAnimeToListRequest){
    const myAnimeService = new MyAnimeService();
    const res = await myAnimeService.addAnimeToList(req)
}