import axios from "axios";
import { ConnectAnimapService } from "./builder";
import { GetCommentAnimeResponse } from "./dtos/commentAnime";


export class CommentService{
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

    public async getCommentAnime(anime_id:string):Promise<GetCommentAnimeResponse> {
        const response = await axios.get(`${this.url}/comments/anime/${anime_id}`, { 
            headers: this.getConfigHeaders(),
        })
        return response.data
    }
}