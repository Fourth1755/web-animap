import { getSession } from '@auth0/nextjs-auth0';
import Profile from './component/profile';
import SliderMyAnime from './component/sliderMyAnime/sliderMyAnime';
import { UserSerivce } from "../service/userService";
import { getUserFormCookie } from './action';

type User ={
  name: string
  picture: string
  email: string
  sid: string
}

export default async function Page() {
  const userId = getUserFormCookie();
  const userSerivce = new UserSerivce();
  //const user = await userSerivce.getUserByUUID(userId)
  const animes = await userSerivce.getAnimeByUserUUID(userId)
  return (
    <>
      {/* <Profile user={user}/> */}
      <SliderMyAnime tag="My Anime List" animeList={animes} />
    </>
  )
}