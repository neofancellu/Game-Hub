
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import axios from 'axios'

interface Game {
    id: number,
    name:string
}

interface FetchGamesResponse {
    count: number,
    results: Game[]
}

const useGames = () =>{
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] =useState('')

  useEffect(() =>{
    const controller = new AbortController()

    apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
    .then(res => setGames(res.data.results))
    .catch(err => {
        if (axios.isCancel(err)) {
            console.log("Request canceled:", err.message);
            return;
          } else {
            setError(err.message);
          }
    })

    return() => controller.abort()
  }, [])

  return {games , error};
}

export default useGames;