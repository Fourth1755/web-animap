import ListAnimeBlock from "@/app/components/listAnimeBlock/listAnimeBlock";
import WallpaperAnime from "@/app/components/wallpaperAnime/wallpaperAnime";
import { AnimeService } from "@/app/service/animeService";

export default async function Page({ params }: any) {
    const animeService = new AnimeService();
    const category = await animeService.getAnimesByCategory(params.slug);
    return (
        <div>
            <WallpaperAnime link={category.wallpaper} name={category.name}/>
            <ListAnimeBlock animes={category.anime_list}/>
        </div>
    )
}