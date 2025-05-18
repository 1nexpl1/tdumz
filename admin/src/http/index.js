import axios from "axios";

const $host = axios.create({
    // baseURL: 'http://localhost:8000/api'
    baseURL: 'https://api.tdumz.com/api'
})

export {
    $host
}