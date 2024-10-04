import axios from "axios";
import { ConnectAnimapService } from "./builder";

export class UserSerivce{
    private url:string
    private authorization: string
    
    constructor(){
        const connectAnimap = new ConnectAnimapService()
        this.url = connectAnimap.getUserUrl();
        this.authorization = connectAnimap.getAuthorization()
    }

    private getConfigHeaders(){
        return{
            "Content-Type": "application/json",
            "Authorization": this.authorization
        }
    }

    public async getAnimeByUserSid(sid: string) {
        const response = await axios.get(`${this.url}/${sid}`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }
}