import { cookies } from 'next/headers'
import { UserSerivce } from "@/app/service/userService";

export function getUserFormCookie():string {
    const cookieStore = cookies()
    const user_id = cookieStore.get('user_id')
    if(user_id !== undefined){
        return user_id?.value
    }
    return ""
}
