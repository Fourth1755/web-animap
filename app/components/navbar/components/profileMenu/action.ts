'use server';

import { redirect, RedirectType } from "next/navigation";
import { revalidatePath } from 'next/cache';

export async function navigateToHomePage() {
  revalidatePath("/"); // Update cached posts
  redirect('/',RedirectType.push); // Navigate to the new post page
}

