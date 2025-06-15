import axios from "axios";
import { ConnectAnimapService } from "./builder";
import { GetAnimeListResponse, CreateAnimeRequest, GetAnimeByIdResponse, UpdateAnimeRequest, GetAnimesByCategoryResponse } from "./dtos/anime";
import { GetSeasonalAndYearRequest, GetSeasonalAndYearResponse } from "./dtos/common";

export class CommonService{
    private url:string
    private authorization: string
    
    constructor(){
        const connectAnimap = new ConnectAnimapService()
        this.url = connectAnimap.getCommoneUrl();
        this.authorization = connectAnimap.getAuthorization()
    }

    private getConfigHeaders(){
        return{
            "Content-Type": "application/json",
            "Authorization": this.authorization
        }
    }

    public async getSeasonalAndYear():Promise<GetSeasonalAndYearResponse> {
        const response = await axios.get(`${this.url}/seasonal-year`, { 
            headers: this.getConfigHeaders(),
        })
        return response.data
    }
}