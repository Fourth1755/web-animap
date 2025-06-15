import axios from "axios";
import { ConnectAnimapService } from "./builder";
import { GetEpisodeByAnimeResponse } from "./dtos/episode";

export class EpisodeService {
    private url:string
    private authorization: string
    
    constructor(){
        const connectAnimap = new ConnectAnimapService()
        this.url = connectAnimap.getEpisodeUrl();
        this.authorization = connectAnimap.getAuthorization()
    }

    private getConfigHeaders(){
        return{
            "Content-Type": "application/json",
            "Authorization": this.authorization
        }
    }

    public async getEpisode(anime_id: string, filter: string) :Promise<GetEpisodeByAnimeResponse> {
        const response = await axios.get(`${this.url}/${anime_id}?filter=${filter}`, {
            headers: this.getConfigHeaders()
        })
        return response.data
    }
}