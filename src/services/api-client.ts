import axios,{AxiosRequestConfig} from "axios";

const axiosInstance = axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'c1042621a2164e3499c99383f6cebf9c'
    }
})

export interface FetchResponse<T> {
    count:number,
    next: string | null,
    results:T[]
}

class ApiClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }
}

export default ApiClient

