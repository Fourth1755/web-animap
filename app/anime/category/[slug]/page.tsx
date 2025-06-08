import ListAnimeBlock from "@/app/components/listAnimeBlock/listAnimeBlock";
import WallpaperAnime from "@/app/components/wallpaperAnime/wallpaperAnime";
import { AnimeService } from "@/app/service/animeService";
import { getUser } from "./action";

export default async function Page({ params }: any) {
    const animeService = new AnimeService();
    const category = await animeService.getAnimesByCategory(params.slug);
    const user = getUser();
    return (
        <div className="pt-16">
            <WallpaperAnime link={category.wallpaper} name={category.name}/>
            <ListAnimeBlock animes={category.anime_list} user={user}/>
        </div>
    )
}