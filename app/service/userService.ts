import axios from "axios";
import { ConnectAnimapService } from "./builder";

type UserData = {
    email: string;
    password: string;
}
export class UserSerivce{
    private url:string
    private loginUrl:string
    private authorization: string
    
    constructor(){
        const connectAnimap = new ConnectAnimapService()
        this.url = connectAnimap.getUserUrl()
        this.loginUrl = connectAnimap.getLoginUrl()
        this.authorization = connectAnimap.getAuthorization()
    }

    private getConfigHeaders(){
        return{
            "Content-Type": "application/json",
            "Authorization": this.authorization
        }
    }

    public async login(user: UserData){
        const response = await axios.post(this.loginUrl,user, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async getUserByUUID(uuid:string){
        const response = await axios.get(`${this.url}/${uuid}`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async getAnimeByUserUUID(uuid: string) {
        console.log("getAnimeByUserSid",uuid)
        const response = await axios.get(`${this.url}/anime-list/${uuid}`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }
}