import "./page.scss";
import AddAnimeButton from "./component/buttonAddAnimeToList/button";
import Link from "next/link";
import { AnimeService } from "@/app/service/animeService";
import { SongSerivce } from "@/app/service/songService";
import {
  GetSongsByAnimeIdResponse,
  GetSongsByAnimeIdResponseSong,
} from "@/app/service/dtos/song";
import { EpisodeService } from "@/app/service/episodeService";
import Image from "next/image";
import { CommentService } from "@/app/service/commentService";

export default async function Page(props: any) {
  const params = await props.params;
  const animeService = new AnimeService();
  const songSerivce = new SongSerivce();
  const episodeService = new EpisodeService();
  const commentService = new CommentService();

  const anime = await animeService.getAnime(params.slug);
  const songs = await songSerivce.getSongsByAnimeId(anime.id);
  const episodeResponse = await episodeService.getEpisode(anime.id,"FIRST_APPEARANCE");
  const commentAnime = await commentService.getCommentAnime(anime.id)

  const showAnimeSongItem = (
    animeSong: GetSongsByAnimeIdResponseSong[],
    title: string
  ) => {
    if (!animeSong) {
      return <></>;
    }
    return (
      <div>
        <h1 className="text-white font-medium text-2xl">{title}</h1>
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
                    <Link href={`/artist/${item.id}`} key={item.id}>
                      <p className="text-gray-600 font-medium">{item.name}</p>
                    </Link>
                  ))}
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
            <h1 className="mb-3 text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-4xl dark:text-white">
              {anime.name_thai == ""?anime.name:anime.name_thai}
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
              {anime.my_anime_list_score != 0?              
              <div>
                <h1>MAL Score</h1>
                <p>{anime.my_anime_list_score} / 10</p>
              </div>
              :<></>
              }
            </div>
          </div>
        </div>
        <div className="flex md:flex-row justify-between py-1 flex-col">
          <div className="w-64">
            <div className="w-full">
              <img
                className="rounded-lg shadow-xl shadow-gray-900/50"
                src={anime.image}                
                alt="nature image"
                width={256}
                height={384}
              />
              <AddAnimeButton
                name="Add to List"
                isEdit={false}
                anime={anime}
              />
            </div>
            <div className="pt-4">
              <span className="flex pt-2 text-gray-500">
                <p className="pr-2">Studio:</p>
                {anime.studios.map((item,index) => (
                  <Link key={item.id} href={`/studio/${item.id}`}>
                    <p className="pl-1 text-white w-full">{item.name} {anime.studios.length-1==index?<></>:<>,</>}</p>
                  </Link>
                ))}
              </span>
              {anime.category_universe?              
              <span className="flex pt-2 text-gray-500">
                <p className="pr-2">Timeline:</p>
                  <Link href={`universe/${anime.category_universe[0].id}`}>
                    <p className="pl-1 text-white">{anime.category_universe[0].name}</p>
                  </Link>
              </span>:<></>}
            </div>
          </div>
          <div className="trailer-container">
            {anime.trailer_embed?
              <div>
                <iframe
                  className="trailer-iframe"
                  id="player"
                  src={`${anime.trailer_embed}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                  {/* <div className="trailer-slider">
                    <img 
                      className="trailer-slider-item"
                      src="https://a.storyblok.com/f/178900/960x540/1e492935d2/roshidere-teasaer-pv.jpg/m/filters:quality(95)format(webp)"/>
                                          <img 
                      className="trailer-slider-item"
                      src="https://a.storyblok.com/f/178900/960x540/1e492935d2/roshidere-teasaer-pv.jpg/m/filters:quality(95)format(webp)"/>
                                          <img 
                      className="trailer-slider-item"
                      src="https://a.storyblok.com/f/178900/960x540/1e492935d2/roshidere-teasaer-pv.jpg/m/filters:quality(95)format(webp)"/>
                                          <img 
                      className="trailer-slider-item"
                      src="https://a.storyblok.com/f/178900/960x540/1e492935d2/roshidere-teasaer-pv.jpg/m/filters:quality(95)format(webp)"/>
                                          <img 
                      className="trailer-slider-item"
                      src="https://a.storyblok.com/f/178900/960x540/1e492935d2/roshidere-teasaer-pv.jpg/m/filters:quality(95)format(webp)"/>
                      <img 
                      className="trailer-slider-item"
                      src="https://a.storyblok.com/f/178900/960x540/1e492935d2/roshidere-teasaer-pv.jpg/m/filters:quality(95)format(webp)"/>
                  </div> */}
                  
              </div>
              :<></>
            }
            <div className="pt-5">
              {anime.categories?.map((item) => (
                <Link href={`category/${item.id}`} key={item.id} >
                    <button className="px-4 py-0.5 rounded-2xl border-2 border-gray-100 mb-1 ml-1.5 hover:cursor-pointer hover:bg-opacity-80 hover:bg-gray-300">{item.name}</button>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='pt-5'>
          <p className="text-gray-500">{anime.description}</p>
        </div>
        {episodeResponse?.episodes!=null?        
        <div className="mt-5 bg-black p-8 rounded-2xl h-96 overflow-y-auto">
          <h1 className="text-white font-medium text-2xl">Episodes</h1>
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
                        <span className="ml-2" key={character.id}>
                          <img 
                            src={character.image}
                            className="w-10 h-10 rounded-full object-cover"/>
                      </span>))}
                    </div>
                  </div>
                </div>
              ))}
        </div>:<></>
        }
        {songs.opening_song!=null||songs.ending_song!=null||songs.soundtrack_song!=null?
        <div className="mt-5 bg-black px-8 py-3 rounded-2xl overflow-y-auto">
          {showAnimeSongItem(songs.opening_song,"Opening")}
          {showAnimeSongItem(songs.ending_song,"Ending")}
          {showAnimeSongItem(songs.soundtrack_song,"Soundtrack")}
        </div>:<></>
        }

        <div className="pt-6">
          <h1 className="text-white font-medium text-2xl">Characters & Voice Actors</h1>
          <div className="flex pt-5">
            <button className="px-5 py-2 bg-white rounded-2xl mr-3 text-black">Original</button>
            <button className="px-5 py-2 bg-gray-600 rounded-2xl">Thai</button>
          </div>
          <div>

          </div>
        </div>
        <div className="pt-6">
          <h1>ความคิดเห็น {commentAnime.pagination.total_items} รายการ</h1>
          <div className="flex pt-5">
            <button className="px-5 py-2 bg-white rounded-2xl mr-3 text-black">Comment</button>
            <button className="px-5 py-2 bg-gray-600 rounded-2xl">Spoiler</button>
          </div>
          <div className="flex pt-5">
            {/* <img/><input/> */}
            {commentAnime.data.map((item)=>(
              <div className="flex" key={item.id}>
                <img
                  className="w-12 h-12 rounded-full object-cover" 
                  src={item.author_image}/>
                <div className="pl-4">
                  <div className="flex">
                    <h1 className="font-semibold">{item.author_name}</h1>
                    <span className="pl-3 text-gray-700">{item.created_at}</span>
                  </div>
                  <h2 className="pt-1">{item.message}</h2>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
