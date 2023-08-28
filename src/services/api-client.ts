import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'109407a29e204441a5883d16d3d6ddd3'
    }
})