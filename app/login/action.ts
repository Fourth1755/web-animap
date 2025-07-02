'use server';

import { redirect, RedirectType } from "next/navigation";
import { revalidatePath } from 'next/cache';
import { UserService } from '@/app/service/userService';


type UserData = {
    email: string;
    password: string;
}

export async function navigateToHomePage() {
  revalidatePath("/"); // Update cached posts
  redirect('/',RedirectType.push); // Navigate to the new post page
}

