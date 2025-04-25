import { MyAnimeService } from "@/app/service/myAnimeService";
import { Button } from "../../components/mtailwind";
import EditTopAnimeButton from "./editTopAnimeModal/button";
import ProgressBar from "./progressbar/progressbar"

type PropProfile = {
    user: PropProfileUser
}

type PropProfileUser = {
    name: string
    picture: string
    email: string
    uuid: string
}

export default async function Profile(props: PropProfile) {
    const user = props.user
    const myAnimeService = new MyAnimeService();
    const myAnime = await myAnimeService.getMyAnimeByUserUUID(user.uuid)
    const myTopAnimeList = await myAnimeService.getMyTopAnimeByUserUUID(user.uuid)
    return (
        <div className="container lg:mx-auto flex pt-5">
            <div className="w-96 pt-2 mx-10 flex">
                <div className="mx-auto">
                    <img 
                        src={user.picture} 
                        alt={user.name}
                        className="relative inline-block h-72 w-72 !rounded-full object-cover object-center" />
                            <h1 className="mt-4 text-xl font-semibold lg:text-2xl ">{user.name}</h1>
                            <Button className="border-spacing-1 w-full mt-6 mb-4">
                            Edit Profile</Button>
                            <p className="text-gray-500">Hello my name is Forger, Anya nice to meet you </p>
                </div>
            </div>
            <div className="w-full">
                <ProgressBar totalAnime={10} />
                <div className="pt-2">
                    <div className="flex justify-between">
                        <h1 className="font-semibold text-xl">My Top Anime</h1>
                        <EditTopAnimeButton 
                            name="edit top anime" 
                            user={user.uuid}
                            myAnimeList={myAnime}/>   
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-4">
                        {myTopAnimeList?.map((item,index)=>(
                            <div key={index} className="bg-black flex rounded-lg">
                                <div className="m-2 flex items-center">
                                    <h1 className="text-xl font-bold">{index+1}</h1></div>
                                <img src={item.image} className="w-24 h-full"/>
                                <div className="m-4"><h1 className="text-gray-500 font-medium">{item.anime_name}</h1></div>
                            </div>)
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}