import { commonService } from "@/app/service/commonService";
import SeasonalYearBar from "../../component/seasonalYearBar/seasonalYearBar";
import SeasonWallPaper from "../../component/seasonWallPaper";
import SeasonalAnime from "../../component/seasonalAnime/seasonalAnime";

export default async function Page(props: any) {
    const params = await props.params;
    const year = params.slug
    // หาวิธีเก็บเป็น cache น่าจะดีกว่า
    const seasonalAndYear = await commonService.getSeasonalAndYear();
    return(
        <>
            <SeasonWallPaper seasonal="spring" year={year} />
            <SeasonalYearBar seasonalAndYear={seasonalAndYear} seasonal="spring" year={year}/>
            <SeasonalAnime seasonal="spring" year={year}/>
        </>
    )
}