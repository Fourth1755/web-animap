import PageClient from "./components/pageClient/pageClient";
import { TierTemplateService } from '@/app/service/tierTemplateService';

export default async function Page(props:any) {
    const params = await props.params;
    const tierTemplateService = new TierTemplateService()
    
    const getTierTemplateByIdResponse =await tierTemplateService.getByIdTierTemplate(params.slug)

    return (
            <PageClient id={params.slug} getTierTemplateByIdResponse={getTierTemplateByIdResponse}/>);
}