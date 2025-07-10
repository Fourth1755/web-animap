import SliderAnime from "./components/sliderAnime/sliderAnime";
import { AnimeService } from "./service/animeService";
import WallpaperAnimeMain from "./components/wallpaperAnimeMain/wallpapeerAnimeMain";

export default async function Home() {
  const myAnimeList:number[] = [1,2,6,8,10]
  
  const animeSerivce = new AnimeService()
  const animes = await animeSerivce.getAnimes();
  const animesSwordArtOnline = await animeSerivce.getAnimesByCategoryUniverse('0196cf20-c309-7911-b85d-d06bd970e9c0')
  const animeSchool = await animeSerivce.getAnimesByCategory('0196446e-4f2a-73be-823e-53f7363d2deb')
  const animeOnePiece = await animeSerivce.getAnimesByCategoryUniverse('0196cf34-338a-7651-b248-69383e5be551')
  const animeStudioGibi = await animeSerivce.getAnimesByStudio('019566fd-0842-7206-b22f-2b9b89ea46b4')
  // const animeByTagSchool = await animeSerivce.getAnimesByCategory(1);
  // const animeByTagnePiece = await animeSerivce.getAnimesByCategory(4);
  // https://wallpapercave.com/dwp2x/wp13207813.png
  // https://images7.alphacoders.com/737/737400.jpg
  return (
    <div>
      <WallpaperAnimeMain name="Welcome To Anime Map" link="https://wallpapercg.com/download/kusuriya-no-hitorigoto-the-apothecary-diaries--23099.jpg"/>
      <SliderAnime tagAnime="All" animeList={animes} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime="Sword Art Online" animeList={animesSwordArtOnline.anime_list} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime="School" animeList={animeSchool.anime_list} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime="One Piece" animeList={animeOnePiece.anime_list} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime={"From "+animeStudioGibi.name} animeList={animeStudioGibi.anime_list} myAnimeListId={myAnimeList}/>
    </div>
  );
}
