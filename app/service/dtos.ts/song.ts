type GetSongsByAnimeIdResponseSongChannel = {
    id: number
    channel: number
    type: number
    link: string
    is_main: number
}

type GetSongsByAnimeIdResponseSongArtist = {
    id: number
    name: string
    image: string
}

export type GetSongsByAnimeIdResponseSong = {
    id: number
    name: string
    image: string
    description: string
    year: string
    type: number
    sequence: number
    anime_id: number
    song_channel: GetSongsByAnimeIdResponseSongChannel[]
    song_artist: GetSongsByAnimeIdResponseSongArtist[]
}

export type GetSongsByAnimeIdResponse = {
    opening_song: GetSongsByAnimeIdResponseSong[]
    ending_song: GetSongsByAnimeIdResponseSong[]
    soundtrack_song: GetSongsByAnimeIdResponseSong[]
}