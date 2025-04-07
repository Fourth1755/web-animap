"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getUserFormCookie, deleteUserCookie } from "../../util/action";

export async function getUser(){
    const user = getUserFormCookie()
    return user
}

export async function logOut() {
    deleteUserCookie()
    revalidatePath("/"); // Update cached posts
    redirect(`/`); // Navigate to the new post page
}