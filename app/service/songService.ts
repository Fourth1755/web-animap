import axios from "axios";
import { ConnectAnimapService } from "./builder";
import { GetSongsByAnimeIdResponse, GetSongsByArtistResponse } from "./dtos/song";

export class SongSerivce{
    private url:string
    private authorization: string
    
    constructor(){
        const connectAnimap = new ConnectAnimapService()
        this.url = connectAnimap.getSongsUrl();
        this.authorization = connectAnimap.getAuthorization()
    }

    private getConfigHeaders(){
        return{
            "Content-Type": "application/json",
            "Authorization": this.authorization
        }
    }

    public async getSongsByAnimeId(id: string):Promise<GetSongsByAnimeIdResponse> {
        const response = await axios.get(`${this.url}/anime/${id}`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async getSongsByArtistId(id: string):Promise<GetSongsByArtistResponse> {
        const response = await axios.get(`${this.url}/artist/${id}`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }
}