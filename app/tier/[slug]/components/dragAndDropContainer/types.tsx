export type AnimeItemResponse = {
    id: string
    image: string
    name: string
}
export type Items = Record<string, AnimeItemResponse[]>;
