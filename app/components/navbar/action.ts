"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getUserFormCookie, deleteUserCookie } from "../../util/action";
import { UserService } from "@/app/service/userService";
import { UserInfo } from "@/app/service/dtos.ts/user";
export async function getUser(){
    const user = getUserFormCookie()
    return user
}

export async function logOut() {
    deleteUserCookie()
    revalidatePath("/"); // Update cached posts
    redirect(`/`); // Navigate to the new post page
}

export async function logIn() {
    revalidatePath("/login"); // Update cached posts
    redirect(`/login`); // Navigate to the new post page
}

// export async function getUserInfo():Promise<UserInfo> {
//     const userId =await getUser();
//     const userService = new UserService()
//     const user = await userService.getUserInfoById(userId)
//     return user
// }