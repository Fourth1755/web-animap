import axios from "axios";
import { ConnectAnimapService } from "./builder";
import { CreateCommentAnimeRequest, GetCommentAnimeResponse } from "./dtos/commentAnime";


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

    public async createCommentAnime(req:CreateCommentAnimeRequest) {
        const api = axios.create({
            withCredentials:true
        })
        const response = await api.post(`${this.url}/comments/anime`,req, { 
            headers: {
                ...this.getConfigHeaders(),
            },
        })
        return response
    }
}