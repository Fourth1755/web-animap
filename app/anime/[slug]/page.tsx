import "./page.scss";
import { getUser } from "./action";
import AddAnimeButton from "./component/buttonAddAnimeToList/button";
import Link from "next/link";
import { AnimeService } from "@/app/service/animeService";
import { SongSerivce } from "@/app/service/songService";
import {
  GetSongsByAnimeIdResponse,
  GetSongsByAnimeIdResponseSong,
} from "@/app/service/dtos.ts/song";

export default async function Page({ params }: any) {
  const animeService = new AnimeService();
  const songSerivce = new SongSerivce();
  const anime = await animeService.getAnime(params.slug);
  const songs = await songSerivce.getSongsByAnimeId(anime.id);
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
        <h1 className="content-header">{title}</h1>
        <div className="pt-2">
          {animeSong.map((song, index) => (
            <div 
              key={song.id}
              className="flex my-2">
              <div className="flex items-center">
                <h1 className="font-bold text-white text-3xl px-4">{index + 1}</h1>
              </div>
              <div>
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
              </div>
              <div className="p-8">
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
      <div className="container mx-auto md:px-40 px-5">
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
              <div className="pr-4">
                <h1>Animap Score</h1>
                <p>9/10</p>
              </div>
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
                {anime.studios.map((item) => (
                  <Link key={item.id} href={`studio/${item.id}`}>
                    <p className="pl-1 text-white">{item.name}</p>
                  </Link>
                ))}
              </span>
              <span className="flex pt-2 text-gray-500">
                <p className="pr-2">Universe:</p>
                  <Link href={`univers/${anime.universe.id}`}>
                    <p className="pl-1 text-white">{anime.universe.name}</p>
                  </Link>
              </span>
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
                <button key={item.id} className="anime-category-button">
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div>
          {showAnimeSongItem(songs.opening_song,"Opening")}
          {showAnimeSongItem(songs.ending_song,"Ending")}
          {showAnimeSongItem(songs.soundtrack_song,"Soundtrack")}
        </div>
      </div>
    </>
  );
}
