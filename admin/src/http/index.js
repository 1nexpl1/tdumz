import axios from "axios";

const $host = axios.create({
    baseURL: 'http://localhost:7000/api'
})

export {
    $host
}