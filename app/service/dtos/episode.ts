type GetEpisodeByAnimeResponseEpisode = {
    id: string
    number: number
    name: string
    name_thai: string
    name_english: string
    name_japan: string
}

export type GetEpisodeByAnimeResponse = {
    episodes: GetEpisodeByAnimeResponseEpisode[]
}