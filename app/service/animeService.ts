import apiClient from './apiClient';
import { GetAnimeListResponse, 
    CreateAnimeRequest, 
    GetAnimeByIdResponse, 
    UpdateAnimeRequest, 
    GetAnimesByCategoryResponse, 
    GetAnimesBySeasonalAndYearResponse, 
    GetAnimesBySeasonalAndYearRequest, 
    GetAnimesByCategoryUniverseResponse, 
    GetAnimesByStudioResponse, 
    GetAnimePictureResponse} from "./dtos/anime";

export const animeService={
    createAnime:(anime: CreateAnimeRequest)=> {        
        return apiClient.post<CreateAnimeRequest>('/animes', anime);
    },

    getAnimes:():Promise<GetAnimeListResponse[]>=> {
        return apiClient.get<any,GetAnimeListResponse[]>('/animes');
    },

    getAnime:(id:string):Promise<GetAnimeByIdResponse>=> {
        return apiClient.get<any,GetAnimeByIdResponse>(`/animes/${id}`);
    },
    
    updateAnime:(anime: UpdateAnimeRequest)=> {
        return apiClient.put<any,GetAnimeListResponse>(`/animes/${anime.id}`, anime);
    },

    getAnimesByCategory:(id:string):Promise<GetAnimesByCategoryResponse>=> {
        return apiClient.get<any,GetAnimesByCategoryResponse>(`/animes/category/${id}`);
    },

    getAnimesByCategoryUniverse:(id:string):Promise<GetAnimesByCategoryUniverseResponse>=> {
        return apiClient.get<any,GetAnimesByCategoryUniverseResponse>(`/animes/category-universe/${id}`);
    },

    getAnimesBySeasonalAndYear:(request:GetAnimesBySeasonalAndYearRequest):Promise<GetAnimesBySeasonalAndYearResponse>=> {
        return apiClient.post<GetAnimesBySeasonalAndYearRequest,GetAnimesBySeasonalAndYearResponse>('/animes/seasonal-year',request);
    },

    getAnimesByStudio:(id:string):Promise<GetAnimesByStudioResponse>=> {
        return apiClient.get<any,GetAnimesByStudioResponse>(`/animes/studio/${id}`);
    },

    getMediaAnimeByAnimeId:(id:string):Promise<GetAnimePictureResponse>=> {
        return apiClient.get<any,GetAnimePictureResponse>(`/animes/media/${id}`);
    },
}