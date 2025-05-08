"use server";
import { redirect } from "next/navigation";

export default async function navigatToSeasonYearPage(seasonal: string, year :string) {
    redirect(`/anime/season/${seasonal}/${year}`)
}