import { getUserFormCookie } from "@/app/util/action";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function logIn() {
    revalidatePath("/login"); // Update cached posts
    redirect(`/login`); // Navigate to the new post page
}

export async function getUser(){
    const user = getUserFormCookie()
    return user
}