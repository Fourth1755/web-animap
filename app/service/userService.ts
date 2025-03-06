import axios from "axios";
import { ConnectAnimapService } from "./builder";

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

    public async getUserInfoByUUID(userId:string):Promise<UserInfo> {
        const user:UserInfo={
            name:"Fourth",
            picture:"https://i0.wp.com/www.animefeminist.com/wp-content/uploads/2024/07/Alya-in-Russian-1-scaled.jpg?fit=810%2C449&ssl=1",
            email:"",
            uuid:userId
          }
        return user
    }
}