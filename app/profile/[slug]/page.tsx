import Profile from './component/profile';
import SliderMyAnime from './component/sliderMyAnime/sliderMyAnime';
import { MyAnimeService } from "../../service/myAnimeService";
import { UserService } from '../../service/userService';

export default async function Page(props: any) {
    const params = await props.params;
    const userId = params.slug
    const myAnimeService = new MyAnimeService();
    const userService = new UserService();
    const user = await userService.getUserInfoByUserId(userId)
    if(userId == null){ 
        return (<div className='pt-16'>
        <h1>User Not Found</h1>
        </div>)
    }
    const animeYear = await myAnimeService.getMyAnimeYearByUserUUID(userId)

    return (
        <div className='pt-16'>
        <Profile user={user}/>
        <div className='container lg:mx-auto pt-5'>
        {
            animeYear.anime_year?.map((item,index)=>{
            return <SliderMyAnime tag={"Watched in "+item.year} animeList={item.anime} key={index}/>
            })
        }
        </div>
        </div>
    )
}