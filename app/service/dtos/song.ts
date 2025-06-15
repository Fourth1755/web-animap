type GetSongsByAnimeIdResponseSongChannel = {
    id: string
    channel: number
    type: number
    link: string
    is_main: number
}

type GetSongsByAnimeIdResponseSongArtist = {
    id: string
    name: string
    image: string
}

export type GetSongsByAnimeIdResponseSong = {
    id: string
    name: string
    image: string
    description: string
    year: string
    type: number
    sequence: number
    anime_id: string
    song_channel: GetSongsByAnimeIdResponseSongChannel[]
    song_artist: GetSongsByAnimeIdResponseSongArtist[]
}

export type GetSongsByAnimeIdResponse = {
    opening_song: GetSongsByAnimeIdResponseSong[]
    ending_song: GetSongsByAnimeIdResponseSong[]
    soundtrack_song: GetSongsByAnimeIdResponseSong[]
}