import { AnimeService } from "@/app/service/animeService";
import { CommonService } from "@/app/service/commonService";
import SeasonalYearBar from "../../component/seasonalYearBar/seasonalYearBar";
import SeasonWallPaper from "../../component/seasonWallPaper";
import SeasonalAnime from "../../component/seasonalAnime";

export default async function Page({ params }: any){
    const year = params.slug
    const commonService = new CommonService();
    // หาวิธีเก็บเป็น cache น่าจะดีกว่า
    const seasonalAndYear = await commonService.getSeasonalAndYear();
    return(
        <>
            <SeasonWallPaper season="summer" year={year} />
            <SeasonalYearBar seasonalAndYear={seasonalAndYear} season="summer" year={year}/>
            <SeasonalAnime/>
        </>
    )
}