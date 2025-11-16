import apiClient from './apiClient';
import { GetSeasonalAndYearRequest, GetSeasonalAndYearResponse } from "./dtos/common";

export const CommonService ={
    getSeasonalAndYear:():Promise<GetSeasonalAndYearResponse> => {
        return apiClient.get<any,GetSeasonalAndYearResponse>('/common/seasonal-year')
    },
}