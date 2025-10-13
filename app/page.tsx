import SliderAnime from "./components/sliderAnime/sliderAnime";
import { AnimeService } from "./service/animeService";
import WallpaperAnimeMain from "./components/wallpaperAnimeMain/wallpapeerAnimeMain";

export default async function Home() {
  const myAnimeList:number[] = [1,2,6,8,10]
  
  const animeSerivce = new AnimeService()
  const animes = await animeSerivce.getAnimes();
  const animesSwordArtOnline = await animeSerivce.getAnimesByCategoryUniverse('0196cf20-c309-7911-b85d-d06bd970e9c0')
  const animeSchool = await animeSerivce.getAnimesByCategory('0198dca9-86c6-7df7-ba08-e8b1b1256324')
  const animeOnePiece = await animeSerivce.getAnimesByCategoryUniverse('0196cf34-338a-7651-b248-69383e5be551')
  const animeStudioGibi = await animeSerivce.getAnimesByStudio('019566fd-0842-7206-b22f-2b9b89ea46b4')
  const animeStudioA1 = await animeSerivce.getAnimesByStudio('019566f2-46cb-78bb-aeea-56bf7bca0248')
  const animeRomance = await animeSerivce.getAnimesByCategory('0198dca9-86c0-7929-b0d6-1a585bb9ac74')
  const fantasy = await animeSerivce.getAnimesByCategory('0198e19c-3cb8-7d80-a7e1-d9679b5c6fa8')
  const drama = await animeSerivce.getAnimesByCategory('0198e19b-e8fc-7bcb-85db-ca1e9b0fcaed')
  const adventure = await animeSerivce.getAnimesByCategory('0198e19b-e581-76a2-8009-786f45f6b22d')
  const ufotable = await animeSerivce.getAnimesByStudio('019566fa-dc59-7258-bc3f-f3d9f0f6c182')
  const fate = await animeSerivce.getAnimesByCategoryUniverse('0196cf24-771e-768e-91c8-8395498f90e4')
  const action = await animeSerivce.getAnimesByCategory('0198e19b-f5a7-745a-a8db-845a56f830bd')
  const doraemon = await animeSerivce.getAnimesByCategoryUniverse('0199de4d-dbd9-797a-b8e8-ce0dcc7e1106')
  

  // const animeByTagSchool = await animeSerivce.getAnimesByCategory(1);
  // const animeByTagnePiece = await animeSerivce.getAnimesByCategory(4);
  // https://wallpapercave.com/dwp2x/wp13207813.png
  // https://images7.alphacoders.com/737/737400.jpg
  //https://deadline.com/wp-content/uploads/2025/03/Demon-Slayer_-Kimetsu-no-Yaiba-Infinity-Castle-Theatrical-Date-Poster-US-e1741194118916.jpg
  //https://static0.cbrimages.com/wordpress/wp-content/uploads/2025/07/my-dress-up-darling-season-2-director-opens-up-about-difficult-production-after-3-years.jpg
  //https://dropcdn.laylo.com/images/20251007-ccfe4d070840.JPG
  return (
    <div>
      <WallpaperAnimeMain name="Welcome To Anime Map" link="https://substackcdn.com/image/fetch/$s_!IDqZ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F69146d02-242e-496d-8bf6-66626775b710_1920x1080.jpeg"/>
      {/* <SliderAnime tagAnime="All" animeList={animes} myAnimeListId={myAnimeList}/> */}
      <SliderAnime tagAnime="Doraemon The Moive" animeList={doraemon.anime_list} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime="School" animeList={animeSchool.anime_list} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime="Fate" animeList={fate.anime_list} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime="Adventure" animeList={adventure.anime_list} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime="One Piece" animeList={animeOnePiece.anime_list} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime="Romance" animeList={animeRomance.anime_list} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime="Sword Art Online" animeList={animesSwordArtOnline.anime_list} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime={"From "+animeStudioGibi.name} animeList={animeStudioGibi.anime_list} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime="Fantasy" animeList={fantasy.anime_list} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime={"From "+animeStudioA1.name} animeList={animeStudioA1.anime_list} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime="Drama" animeList={drama.anime_list} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime={"From "+ufotable.name} animeList={ufotable.anime_list} myAnimeListId={myAnimeList}/>
      <SliderAnime tagAnime="Action" animeList={action.anime_list} myAnimeListId={myAnimeList}/>
    </div>
  );
}
