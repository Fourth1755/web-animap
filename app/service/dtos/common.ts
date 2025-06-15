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