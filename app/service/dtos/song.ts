type GetSongsByAnimeIdResponseSongChannel = {
    id: string
    channel: string
    type: string
    link: string
    is_main: boolean
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

type SongChannel ={
    id:string
    channel: string
    type:string
    link:string
    is_main:boolean
}

type GetSongsByArtistResponseSong = {
    id:string
    name:string
    image: string
    year: string
    description: string
    anime_id: string
    anime_name: string
    anime_wallpaper: string
    type:string
    sequence:number
    song_channel:SongChannel[]
}

type GetGetSongsByArtistResponseAritst = {
    id: string
    name: string
    full_name: string
    full_name_japan: string
    date_of_birth: string
    image: string
}

export type GetSongsByArtistResponse = {
    aritst:GetGetSongsByArtistResponseAritst
    songs: GetSongsByArtistResponseSong[]
}