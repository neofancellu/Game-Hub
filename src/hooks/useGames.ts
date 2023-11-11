
import ApiClient, {FetchResponse} from '../services/api-client';
import { useInfiniteQuery } from '@tanstack/react-query'
import { Platform } from './usePlatforms';
import ms from 'ms'
import UseGameQueryStore from '../store';

const apiClient = new ApiClient<Game>('/games')

export interface Game {
    id: number,
    name:string,
    slug:string,
    description_raw: string,
    background_image:string,
    parent_platforms:{platform: Platform}[]
    metacritic: number;
    rating_top: number;
}



const useGames = () =>{
    const gameQuery = UseGameQueryStore(s => s.gameQuery)

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient
            .getAll({
                params: {
                    genres: gameQuery.genreId, 
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam,
                },
            }),
            getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length+1 : undefined;
        },
        staleTime: ms('24h'),
    });
}
    


export default useGames;   