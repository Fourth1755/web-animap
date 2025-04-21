import Image from "next/image";
import SliderAnime from "./components/SliderAnime/sliderAnime";
import anime from "./animeList.json"
import Wallpaper from "./components/Wallpaper";
import { AnimeService } from "./service/animeService";

export default async function Home() {
  const myAnimeList:number[] = [1,2,6,8,10]
  
  const animeSerivce = new AnimeService()
  const animes = await animeSerivce.getAnimes();
  // const animeByTagSchool = await animeSerivce.getAnimesByCategory(1);
  // const animeByTagnePiece = await animeSerivce.getAnimesByCategory(4);
  return (
    <div>
      <Wallpaper/>
      <SliderAnime tagAnime="All" animeList={animes} myAnimeListId={myAnimeList}/>
      {/* <SliderAnime tagAnime="School" animeList={animeByTagSchool} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime="One Piece" animeList={animeByTagnePiece} myAnimeListId={myAnimeList}/> */}
    </div>
  );
}
