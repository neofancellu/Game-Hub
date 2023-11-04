

import platforms from "../data/platforms"
import apiClient from "../services/api-client"
import useData, { FetchResponse } from "./useData"
import { useQuery } from '@tanstack/react-query'


interface Platform{
    id: number,
    name: string,
    slug: string,
}

const usePlatforms = () => useQuery({
    queryKey:['platforms'],
    queryFn: () => apiClient
                .get<FetchResponse<Platform>>('/platforms/lists/parents')
                .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    initialData: platforms
})

export default usePlatforms