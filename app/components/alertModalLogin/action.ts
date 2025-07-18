'use server';

import { redirect, RedirectType } from "next/navigation";
import { revalidatePath } from 'next/cache';

export async function navigateToLoginPage() {
  revalidatePath("/login"); // Update cached posts
  redirect('/login',RedirectType.push); // Navigate to the new post page
}