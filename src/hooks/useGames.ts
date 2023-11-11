
import ApiClient, {FetchResponse} from '../services/api-client';
import { useInfiniteQuery } from '@tanstack/react-query'
import ms from 'ms'
import UseGameQueryStore from '../store';
import { Game } from '../entities/Game';

const apiClient = new ApiClient<Game>('/games')

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