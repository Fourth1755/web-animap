"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { UserService } from "@/app/service/userService";
import { cookies } from 'next/headers'
import { RegisterRequest } from "../service/dtos/user";

type UserData = {
    email: string;
    password: string;
}

export async function register(user: RegisterRequest) {
  const userService = new UserService();
  try {
    const responseRegister = await userService.register(user)
    const loginRequest:UserData ={
        email: user.email,
        password:user.password
    }
    const responseLogin = await userService.login(loginRequest)

  } catch (error) {
    // Handle errors
    console.error(error);
  }
  revalidatePath("/"); // Update cached posts
  redirect(`/`); // Navigate to the new post page
}
