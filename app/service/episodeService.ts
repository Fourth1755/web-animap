import apiClient from './apiClient';
import { ConnectAnimapService } from "./builder";
import { GetEpisodeByAnimeResponse } from "./dtos/episode";

export const episodeService = {
    getEpisode:(anime_id: string, filter: string) :Promise<GetEpisodeByAnimeResponse> => {
        return apiClient.get<any,GetEpisodeByAnimeResponse>(`/episodes/${anime_id}?filter=${filter}`)
    }
}