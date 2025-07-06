import { cookies } from 'next/headers'
import { UserService } from "@/app/service/userService";
import { UserInfo } from '../service/dtos/user';

export async function getUserFormCookie():Promise<string> {
    // const cookie = (await cookies()).get('session')?.value
    // const session = await decrypt(cookie)

    return ""
}

// export function getUserInfoFormCookie():UserInfo {
//     const cookieStore = cookies()
//     const uuid = cookieStore.get('user_id')
//     const name = cookieStore.get('user_id')
//     const picture = cookieStore.get('user_id')
//     const email = cookieStore.get('user_id')
//     if (uuid !== undefined && name !== undefined && picture !== undefined && email !== undefined){
//         const userInfo: UserInfo ={
//             name:name.value,
//             uuid:uuid.value,
//             picture:picture.value,
//             email:email.value
//         }
//         return userInfo
//     }
//     return 
// }

export function deleteUserCookie() {
    const cookieStore = (cookies() as unknown as UnsafeUnwrappedCookies)
    const user_id = cookieStore.delete('user_id')
}