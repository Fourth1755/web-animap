import axios from "axios";
import { ConnectAnimapService } from "./builder";
import { AddAnimeToListRequest, GetMyAnimeByUserUUIDResponse, GetMyAnimeYearByUserUUIDResponse, GetMyTopAnimeByUserUUIDResponse } from "./dtos/myAnime";



export class MyAnimeService{
    private url:string
    private loginUrl:string
    private authorization: string
    
    constructor(){
        const connectAnimap = new ConnectAnimapService()
        this.url = connectAnimap.getMyAnimeUrl()
        this.loginUrl = connectAnimap.getLoginUrl()
        this.authorization = connectAnimap.getAuthorization()
    }

    private getConfigHeaders(){
        return{
            "Content-Type": "application/json",
            "Authorization": this.authorization
        }
    }

    public async getMyAnimeByUserUUID(uuid: string):Promise<GetMyAnimeByUserUUIDResponse[]> {
        const response = await axios.get(`${this.url}/${uuid}`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async addAnimeToList(req: AddAnimeToListRequest) {
        const response = await axios.post(`${this.url}`,req, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async getMyTopAnimeByUserUUID(uuid: string):Promise<GetMyTopAnimeByUserUUIDResponse[]> {
        const response = await axios.get(`${this.url}/top-anime/${uuid}`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async getMyAnimeYearByUserUUID(uuid: string):Promise<GetMyAnimeYearByUserUUIDResponse> {
        const response = await axios.get(`${this.url}/anime-year-list/${uuid}`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }
}