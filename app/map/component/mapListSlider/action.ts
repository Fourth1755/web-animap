"use server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type Props = {
    map_path: string
}

export default async function ChagePageAnimeMap(map_path: string){
      revalidatePath(`/map/${map_path}`); // Update cached posts
      redirect(`/map/${map_path}`); // Navigate to the new post page
}