import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'9ace0779a3164e7b9b839c5c0dd871f3'
    }
})