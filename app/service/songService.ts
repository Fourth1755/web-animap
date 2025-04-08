import axios from "axios";
import { ConnectAnimapService } from "./builder";
import { GetSongsByAnimeIdResponse } from "./dtos.ts/song";

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

    public async getSongsByAnimeId(id: number):Promise<GetSongsByAnimeIdResponse> {
        const response = await axios.get(`${this.url}/anime/${id}`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }
}