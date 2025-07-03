import axios from "axios";
import { ConnectAnimapService } from "./builder";
import { UserInfo,RegisterRequest } from "./dtos/user";

type UserData = {
    email: string;
    password: string;
}

type AddAnimeToListRequest = {
    user_uuid:string
    anime_id: number
    score: number
    status: number
}
export class UserService{
    private url:string
    private loginUrl:string
    private registerUrl:string
    private authorization: string
    
    constructor(){
        const connectAnimap = new ConnectAnimapService()
        this.url = connectAnimap.getUserUrl()
        this.loginUrl = connectAnimap.getLoginUrl()
        this.authorization = connectAnimap.getAuthorization()
        this.registerUrl = connectAnimap.getRegisterUrl()
        
    }

    private getConfigHeaders(){
        return{
            "Content-Type": "application/json",
            // "Authorization": this.authorization
        }
    }

    public async login(user: UserData){
        const api = axios.create({
            withCredentials:true
        })
        const response = await api.post(this.loginUrl,user, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async register(request: RegisterRequest){
        const response = await axios.post(this.registerUrl,request, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    // public async getUserById(uuid:string){
    //     const response = await axios.get(`${this.url}/${uuid}`, {
    //         headers: this.getConfigHeaders(),
    //     })
    //     return response.data
    // }

    public async getUserInfo():Promise<UserInfo> {
        const api = axios.create({
            withCredentials:true
        })
        const response = await api.get(`${this.url}/user-info`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }

    public async getUserInfoByUserId(uuid:string):Promise<UserInfo> {
        const response = await axios.get(`${this.url}/user-info/${uuid}`, {
            headers: this.getConfigHeaders(),
        })
        return response.data
    }
}