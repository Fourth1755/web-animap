import axios from "axios";
import { ConnectAnimapService } from "./builder";
import { GetAnimeListResponse, 
    CreateAnimeRequest, 
    GetAnimeByIdResponse, 
    UpdateAnimeRequest, 
    GetAnimesByCategoryResponse, 
    GetAnimesBySeasonalAndYearResponse, 
    GetAnimesBySeasonalAndYearRequest, 
    GetAnimesByCategoryUniverseResponse, 
    GetAnimesByStudioResponse, 
    GetAnimePictureResponse} from "./dtos/anime";

export class AnimeService{
    private url:string
    private authorization: string
    
    constructor(){
        const connectAnimap = new ConnectAnimapService()
        this.url = connectAnimap.getAnimesUrl();
        this.authorization = connectAnimap.getAuthorization()
    }

    private getConfigHeaders(){
        return{
            "Content-Type": "application/json",
            "Authorization": this.authorization
        }
    }

    public async createAnime(anime: CreateAnimeRequest) {
        const response = await axios.post(this.url, anime, { 
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async getAnimes():Promise<GetAnimeListResponse[]> {
        const response = await axios.get(this.url, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async getAnime(id:string):Promise<GetAnimeByIdResponse>{
        const response = await axios.get(`${this.url}/${id}`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async updateAnime(anime: UpdateAnimeRequest){
        const response = await axios.put(`${this.url}/${anime.id}`, anime,{
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async getAnimesByCategory(id:string):Promise<GetAnimesByCategoryResponse> {
        const response = await axios.get(`${this.url}/category/${id}`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

        public async getAnimesByCategoryUniverse(id:string):Promise<GetAnimesByCategoryUniverseResponse> {
        const response = await axios.get(`${this.url}/category-universe/${id}`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async getAnimesBySeasonalAndYear(request:GetAnimesBySeasonalAndYearRequest):Promise<GetAnimesBySeasonalAndYearResponse> {
        const response = await axios.post(`${this.url}/seasonal-year`,request , {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async getAnimesByStudio(id:string):Promise<GetAnimesByStudioResponse> {
        const response = await axios.get(`${this.url}/studio/${id}`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async getMediaAnimeByAnimeId(id:string):Promise<GetAnimePictureResponse> {
        const response = await axios.get(`${this.url}/media/${id}`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }
}