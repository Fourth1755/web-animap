import axios from "axios";
import { ConnectAnimapService } from "./builder";
import { GetTierTemplatePaginatedResponse, GetTierTemplateResponse } from "./dtos/tierTemplate";

export class TierTemplateService{
    private url:string
    private authorization: string
    
    constructor(){
        const connectAnimap = new ConnectAnimapService()
        this.url = connectAnimap.getUrl()
        this.authorization = connectAnimap.getAuthorization()
    }

    private getConfigHeaders(){
        return{
            "Content-Type": "application/json",
            "Authorization": this.authorization
        }
    }

    public async getTierTemplate():Promise<GetTierTemplatePaginatedResponse> {
        const response = await axios.get(`${this.url}/tier-template`, { 
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async getByIdTierTemplate(tier_template_id:string):Promise<GetTierTemplateResponse> {
        const response = await axios.get(`${this.url}/tier-template/${tier_template_id}`, { 
            headers: this.getConfigHeaders(),
        })
        return response.data
    }
}