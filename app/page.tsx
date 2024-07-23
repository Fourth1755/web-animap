import Image from "next/image";
import SliderAnime from "./components/SliderAnime/sliderAnime";
export default function Home() {
  const myAnimeList:any[] = []
  const animeByTagSchool:any[] = []
  return (
    <div>Hello
      <SliderAnime tagAnime="School" animeList={animeByTagSchool} myAnimeList={myAnimeList}/>
    </div>
  );
}
