import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'c1042621a2164e3499c99383f6cebf9c'
    }
})

export interface FetchResponse<T> {
    count:number,
    results:T[]
}   