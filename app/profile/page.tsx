import { getSession } from '@auth0/nextjs-auth0';
import Profile from './component/profile';
import SliderMyAnime from './component/sliderMyAnime/sliderMyAnime';
import { UserSerivce } from "../service/userService";

type User ={
  name: string
  picture: string
  email: string
  sid: string
}

export default async function Page() {
  const session = await getSession();
  const userSession = session?.user
  const user: User={
    name:userSession?.name,
    picture:userSession?.picture,
    email:userSession?.email,
    sid :userSession?.sid,
  }

  const userSerivce = new UserSerivce()
  const animes = await userSerivce.getAnimeByUserSid(user.sid)
  return (
    <>
      <Profile user={user}/>
      <SliderMyAnime tag="My Anime List" animeList={animes} />
    </>
  )
}