import { useState, useEffect } from "react"
import axios from "axios"
import apiClient from "../services/api-client"



interface FetchResponse<T> {
    count:number,
    results:T[]
}   

const useData = <T>(endpoint: string) =>{
    const [data, setData] = useState<T[]>([])
    const [error, setError] =useState('')
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() =>{
      const controller = new AbortController()
  
      setLoading(true);
  
      apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
      .then(res => {
          setData(res.data.results);
          setLoading(false);
      })
      .catch(err => {
          if (axios.isCancel(err)) {
              console.log("Request canceled:", err.message);
              return;
            } else {
              setError(err.message);
              setLoading(false);
            }
      })
  
      return() => controller.abort()
    }, [])
  
    return {data , error, isLoading,};
}

export default useData