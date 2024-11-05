import Profile from './component/profile';
import SliderMyAnime from './component/sliderMyAnime/sliderMyAnime';
import { UserSerivce } from "../service/userService";
import { getUserFormCookie } from '../util/action';

type User ={
  name: string
  picture: string
  email: string
  uuid: string
}

export default async function Page() {
  // get username form params
  // get user detail form username

  const userId = getUserFormCookie();
  const userSerivce = new UserSerivce();
  //const user = await userSerivce.getUserByUUID(userId)

  const user:User={
    name:"Fourth",
    picture:"https://i0.wp.com/www.animefeminist.com/wp-content/uploads/2024/07/Alya-in-Russian-1-scaled.jpg?fit=810%2C449&ssl=1",
    email:"",
    uuid:""
  }
  const animes = await userSerivce.getAnimeByUserUUID(userId)
  return (
    <>
      <Profile user={user}/>
      <SliderMyAnime tag="My Anime List" animeList={animes} />
    </>
  )
}