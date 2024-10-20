import { AnimeSerivce } from "@/app/service/animeService";
import { getUserFormCookie } from "./../../util/action";

export async function getAnime(id:number){
    const animeService = new AnimeSerivce();
    const res = await animeService.getAnime(id)

    return res
}

export function getUser(){
    const user  = getUserFormCookie()

    return user
}
