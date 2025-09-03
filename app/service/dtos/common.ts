export type GetSeasonalAndYearRequest = {
    year: string
    seasonal: string
}
type GetSeasonalAndYearResponseData = {
    year: string
    seasonal: string
}

export type GetSeasonalAndYearResponse = {
    data: GetSeasonalAndYearResponseData[]
}

export type PaginationResponse = {
    page: number
    limit: number
    total_pages: number
    total_items:number
}