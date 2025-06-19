import "./page.scss";
import { getUser } from "./action";
import AddAnimeButton from "./component/buttonAddAnimeToList/button";
import Link from "next/link";
import { AnimeService } from "@/app/service/animeService";
import { SongSerivce } from "@/app/service/songService";
import {
  GetSongsByAnimeIdResponse,
  GetSongsByAnimeIdResponseSong,
} from "@/app/service/dtos/song";
import { EpisodeService } from "@/app/service/episodeService";

export default async function Page({ params }: any) {
  const animeService = new AnimeService();
  const songSerivce = new SongSerivce();
  const episodeService = new EpisodeService();

  const anime = await animeService.getAnime(params.slug);
  const songs = await songSerivce.getSongsByAnimeId(anime.id);
  const episodeResponse = await episodeService.getEpisode(anime.id,"FIRST_APPEARANCE");
  const user = getUser();

  const showAnimeSongItem = (
    animeSong: GetSongsByAnimeIdResponseSong[],
    title: string
  ) => {
    if (!animeSong) {
      return <></>;
    }
    return (
      <div>
        <h1 className="text-pink-400 font-medium text-2xl">{title}</h1>
        <div className="pt-2">
          {animeSong.map((song, index) => (
            <div 
              key={song.id}
              className="flex my-1">
              <div className="flex items-center">
                <h1 className="font-bold text-white text-3xl px-4">{index + 1}</h1>
              </div>
              {/* <div>
                {song.song_channel?.map((item, index) => {
                  if (item.is_main == 1) {
                    return (
                      <div key={item.id}>
                        <div>
                          <iframe
                            width="280"
                            height="158"
                            id="player"
                            src={`${item.link}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          ></iframe>
                        </div>
                      </div>
                    );
                  }
                })}
              </div> */}
              <div className="p-4">
                <h2 className="font-medium text-white text-xl">{song.name}</h2>
                <div>
                  {song.song_artist?.map((item)=>(
                    <p 
                      key={item.id}
                      className="text-gray-600 font-medium">{item.name}</p>))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="container mx-auto md:px-40 px-5 pt-16">
        <div className="flex justify-between py-7">
          <div>
            <h1 className="mb-3 text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-3xl dark:text-white">
              {anime.name}
            </h1>
            <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              <Link 
                href={`/anime/season/${anime.seasonal}/${anime.year}`}
                className="hover:underline">
                  {anime.seasonal} {anime.year}
              </Link>
              , {anime.episodes} ep ,{" "}
              {anime.duration}
            </p>
          </div>
          <div>
            <div className="flex justify-between">
              <div>
                <h1>My Score</h1>
                <p>10/10</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row justify-between py-1 flex-col">
          <div>
            <img
              className="h-92 w-68 rounded-lg object-cover object-center shadow-xl shadow-gray-900/50"
              src={anime.image}
              alt="nature image"
            />
            <AddAnimeButton
              name="Add to List"
              isEdit={false}
              anime={anime}
              user={user}
            />
            <div className="pt-4">
              <span className="flex pt-2 text-gray-500">
                <p className="pr-2">Studio:</p>
                {anime.studios.map((item,index) => (
                  <Link key={item.id} href={`/studio/${item.id}`}>
                    <p className="pl-1 text-white">{item.name} {anime.studios.length-1==index?<></>:<>,</>}</p>
                  </Link>
                ))}
              </span>
              {anime.categoryUniverse?              
              <span className="flex pt-2 text-gray-500">
                <p className="pr-2">Timeline:</p>
                  <Link href={`universe/${anime.categoryUniverse[0].id}`}>
                    <p className="pl-1 text-white">{anime.categoryUniverse[0].name}</p>
                  </Link>
              </span>:<></>}
            </div>
          </div>
          <div>
            <iframe
              className="trailer-iframe"
              id="player"
              src={`${anime.trailer_embed}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div className="pt-5">
              {anime.categories?.map((item) => (
                <Link href={`category/${item.id}`} key={item.id} >
                    <button className="anime-category-button">{item.name}</button>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='pt-5'>
          <p className="text-gray-500">{anime.description}</p>
        </div>
        <div className="mt-5 bg-black p-8 rounded-2xl h-96 overflow-y-auto">
          <h1 className="text-pink-400 font-medium text-2xl">Episodes</h1>
              {episodeResponse?.episodes?.map((item)=>(
                <div key={item.id} className="flex my-1 py-3 hover:bg-blue-gray-900 cursor-pointer">
                  <div className="w-16 items-center justify-center flex">
                    <h1 className="font-semibold text-2xl">{item.number}</h1>
                  </div>
                  
                  <div>
                    <div className="flex">
                      <p>{item.name_thai}&nbsp;|&nbsp;</p><p className="text-gray-500">{item.name_english} ({item.name_japan})</p>
                    </div>
                    <div className="flex pt-2">
                      {item?.characters?.map((character)=>(
                        <span className="ml-2">
                          <img 
                            src={character.image}
                            className="w-10 h-10 rounded-full object-cover"/>
                      </span>))}
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <div className="mt-5 bg-black p-8 rounded-2xl overflow-y-auto">
          {showAnimeSongItem(songs.opening_song,"Opening")}
          {showAnimeSongItem(songs.ending_song,"Ending")}
          {showAnimeSongItem(songs.soundtrack_song,"Soundtrack")}
        </div>
      </div>
    </>
  );
}
