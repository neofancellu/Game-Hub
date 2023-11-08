import ms from 'ms'
import platforms from "../data/platforms"
import ApiClient from "../services/api-client"
import { useQuery } from '@tanstack/react-query'

const apiClient = new ApiClient<Platform>('/platforms/lists/parents')


export interface Platform{
    id: number,
    name: string,
    slug: string,
}

const usePlatforms = () => useQuery({
    queryKey:['platforms'],
    queryFn: () => apiClient.getAll({}),
    staleTime: ms('24h'),
    initialData: platforms
})

export default usePlatforms