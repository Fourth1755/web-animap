import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export default async function Page(){
    
    // revalidatePath("/"); // Update cached posts
    // redirect(`/season`); // Navigate to the new post page
    return(
        <div>
            <h1>Seasonal Anime</h1>
        </div>
    )
}