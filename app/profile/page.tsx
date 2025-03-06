import Profile from './component/profile';
import SliderMyAnime from './component/sliderMyAnime/sliderMyAnime';
import { MyAnimeService } from "../service/myAnimeService";
import { getUserFormCookie } from '../util/action';
import { UserSerivce } from '../service/userService';

export default async function Page() {
  // get username form params
  // get user detail form username

  const userId = getUserFormCookie();
  const myAnimeService = new MyAnimeService();
  const userSerivce = new UserSerivce();
  const user = await userSerivce.getUserInfoByUUID(userId)

  const animes = await myAnimeService.getMyAnimeByUserUUID(userId)
  const animeYear = await myAnimeService.getMyAnimeYearByUserUUID(userId)

  return (
    <>
      <Profile user={user}/>
      <SliderMyAnime tag="My Anime List" animeList={animes} />
      {
        animeYear.anime_year.map((item,index)=>{
          return <SliderMyAnime tag={"Watched in "+item.year} animeList={item.anime} key={index}/>
        })
      }
    </>
  )
}