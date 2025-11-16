import { animeService } from "@/app/service/animeService";
import AnimeListAndAnimeDetail from "./component/animeListAndAnimeDetail/animeListAndAnimeDetail";

type CategoryItem = {
    id: string;
    wallpaper:string;
    name:string;
}

export default async function Page(props: any) {
    const params = await props.params;
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