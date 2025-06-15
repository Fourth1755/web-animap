import ListAnimeBlock from "@/app/components/listAnimeBlock/listAnimeBlock";
import WallpaperStudio from "@/app/components/wallpaperStudio/wallpaperStudio";
import { AnimeService } from "@/app/service/animeService";
import { getUser } from "./action";

export default async function Page({ params }: any) {
    const animeService = new AnimeService();
    const studio = await animeService.getAnimesByStudio(params.slug);
    const user = getUser();
    return (
        <div className="pt-16">
            <WallpaperStudio 
                link={studio.wallpaper} 
                name={studio.name} 
                main_color={studio.main_color}/>
            <ListAnimeBlock animes={studio.anime_list} user={user}/>
        </div>);
}