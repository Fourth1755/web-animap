import WallpaperAnime from "@/app/components/wallpaperAnime/wallpaperAnime";
import { AnimeService } from "@/app/service/animeService";
import UniverseAnimeList from "./component/universeAnimeList/universeAnimeList";
import AnimeListAndAnimeDetail from "./component/animeListAndAnimeDetail/animeListAndAnimeDetail";

export default async function Page({ params }: any) {
    const animeService = new AnimeService();
    const category = await animeService.getAnimesByCategoryUniverse(params.slug);
    return(
        <div>
            <WallpaperAnime link={category.wallpaper} name={category.name}/>
            <AnimeListAndAnimeDetail animes={category.anime_list}/>
        </div>
    )
}