import ListAnimeBlock from "@/app/components/listAnimeBlock/listAnimeBlock"
import { AnimeService } from "@/app/service/animeService"
import { getUser } from "./action"

type Props = {
    year: string
    seasonal: string
}
export default async function SeasonalAnime(props: Props) {
    const {year , seasonal} = props
    const animeService = new AnimeService
    const animes = await animeService.getAnimesBySeasonalAndYear({year,seasonal})
    const user = getUser();
    return (
        <div>
            <ListAnimeBlock animes={animes.anime_list} user={user}/>
        </div>
    )
}