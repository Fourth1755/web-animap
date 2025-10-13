export type GetTierTemplateResponse = {
    id: string
    name: string
    type: string
    played_count: number
    total_item: number
    is_play: boolean
    created_at: string
    created_by: string
}

export type GetTierTemplatePaginatedResponse = {
    data: GetTierTemplateResponse[]
}

