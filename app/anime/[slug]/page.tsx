import "./page.scss";
import { getAnime, getUser } from "./action";
import AddAnimeButton from "./component/buttonAddAnimeToList/button";
import Link from "next/link";

export default async function Page({ params }: any) {
  const anime = await getAnime(params.slug);
  const user = getUser()
  return (
    <>
      <div className="container mx-auto md:px-40 px-5">
        <div className="flex justify-between py-7">
          <div>
            <h1 className="mb-3 text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-3xl dark:text-white">
              {anime.name}
            </h1>
            <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              {anime.seasonal} {anime.year}, {anime.episodes} ep ,{" "}
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
              <AddAnimeButton name="Add to List" isEdit={false} anime={anime} user={user}/>
              <div
                className="pt-4">
                <span className="flex pt-2 text-gray-500">Studio: {anime.studios.map((item)=>(
                  <Link 
                    key={item.id}
                    href={`studio/${item.id}`}>
                    <p 
                      className="px-3 text-white">{item.name}</p>
                  </Link>
                ))}</span>
              </div>
            </div>
            <div>
            <iframe
                className="trailer-iframe"
                id="player"
                src={`${anime.trailer}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <div
                className="pt-5">
                  {anime.categories?.map((item)=>(
                    <button 
                      key={item.id}
                      className="anime-category-button">{item.name}</button>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className="content-header">Opening</h1>
            <h1 className="content-header">Ending</h1>
          </div>
        </div>
    </>
  );
}
