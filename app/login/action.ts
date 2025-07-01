"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { UserService } from "@/app/service/userService";
import { cookies } from 'next/headers'

type UserData = {
    email: string;
    password: string;
}

export async function login(user: UserData) {
  const userService = new UserService();
  try {
    const res = await userService.login(user)
  } catch (error) {
    // Handle errors
    console.error(error);
  }
  revalidatePath("/"); // Update cached posts
  redirect(`/`); // Navigate to the new post page
}

