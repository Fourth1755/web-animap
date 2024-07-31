import Image from "next/image";
import SliderAnime from "./components/SliderAnime/sliderAnime";
import anime from "./animeList.json"
export default function Home() {
  const myAnimeList:number[] = [1,2,6,8,10]
  const animeByTagSchool:any[] = anime
  return (
    <div>
      <SliderAnime tagAnime="School" animeList={animeByTagSchool} myAnimeListId={myAnimeList}/>
    </div>
  );
}
