import { getUserFormCookie } from "./../../../../util/action";

export function getUser(){
    const user  = getUserFormCookie()

    return user
}
