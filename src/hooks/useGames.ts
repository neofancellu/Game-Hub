
import { GameQuery } from '../App';
import ApiClient, {FetchResponse} from '../services/api-client';
import { useInfiniteQuery } from '@tanstack/react-query'
import { Platform } from './usePlatforms';

const apiClient = new ApiClient<Game>('/games')

export interface Game {
    id: number,
    name:string,
    background_image:string,
    parent_platforms:{platform: Platform}[]
    metacritic: number;
    rating_top: number;
}



const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<FetchResponse<Game>, Error>({
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
        staleTime: 24 * 60 * 60 * 1000 // 24hrs
    });


export default useGames;   