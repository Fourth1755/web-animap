import ListAnimeBlock from "@/app/components/listAnimeBlock/listAnimeBlock";
import WallpaperAnime from "@/app/components/wallpaperAnime/wallpaperAnime";
import { animeService } from "@/app/service/animeService";
import { getUser } from "./action";

export default async function Page(props: any) {
    const params = await props.params;
    const category = await animeService.getAnimesByCategory(params.slug);
    const user =await getUser();
    return (
        <div className="pt-16">
            <WallpaperAnime link={category.wallpaper} name={category.name}/>
            <ListAnimeBlock animes={category.anime_list} user={user} isShowStudio={true}/>
        </div>
    )
}