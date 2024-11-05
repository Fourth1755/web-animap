import { Button } from "../../components/mtailwind";
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

    return (
        <div className="container lg:mx-auto flex pt-8">
            <div className="w-96 pt-2 mx-10 flex">
                <div className="mx-auto">
                    <img 
                        src={user.picture} 
                        alt={user.name}
                        className="relative inline-block h-72 w-72 !rounded-full object-cover object-center" />
                            <h1 className="mt-4 text-xl font-semibold lg:text-2xl ">{user.name}</h1>
                            <Button className="border-spacing-1 w-full mt-6 mb-4">
                            Edit Profile</Button>
                            <p>Hello my name is Forger, Anya nice to meet you </p>
                </div>
            </div>
            <div className="w-full">
                <ProgressBar totalAnime={10} />
                <div className="pt-6">
                    <h1 className="font-semibold text-3xl">My Top Anime</h1></div>
            </div>
        </div>
    )
}