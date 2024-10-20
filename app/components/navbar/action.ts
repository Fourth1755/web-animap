import { getUserFormCookie } from "../../util/action";

export default function getUser(){
    const user = getUserFormCookie()
    return user
}