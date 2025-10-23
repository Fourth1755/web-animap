import { PaginationResponse } from "./common"

type GetCommentAnimeDataResponse = {
    id: string,
    message: string
    type: string
    created_at: string
    author_id: string
    author_name: string
    author_image: string
}

export type GetCommentAnimeResponse = {
    data: GetCommentAnimeDataResponse[],
    pagination:PaginationResponse,
}

export type CreateCommentAnimeRequest = {
    anime_id: string
    message: string
}