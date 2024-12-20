import { UserSerivce } from "@/app/service/userService";

type AddAnimeToListRequest = {
    user_uuid:string
    anime_id: number
    score: number
    status: number
}

export default async function AddAnimeToList(req:AddAnimeToListRequest){
    const userService = new UserSerivce();
    const res = await userService.addAnimeToList(req)
}