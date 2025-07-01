import WallpaperAnime from "@/app/components/wallpaperAnime/wallpaperAnime";
import { AnimeService } from "@/app/service/animeService";
import UniverseAnimeList from "./component/universeAnimeList/universeAnimeList";
import AnimeListAndAnimeDetail from "./component/animeListAndAnimeDetail/animeListAndAnimeDetail";

type CategoryItem = {
    id: string;
    wallpaper:string;
    name:string;
}

export default async function Page(props: any) {
    const params = await props.params;
    const animeService = new AnimeService();
    const category = await animeService.getAnimesByCategoryUniverse(params.slug);
    const categoryUniverse:CategoryItem = {
        id: category.id,
        name: category.name,
        wallpaper:category.wallpaper
    }
    return(
        <div>
            <AnimeListAndAnimeDetail animes={category.anime_list} category={categoryUniverse} />
        </div>
    )
}