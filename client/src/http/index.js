import axios from "axios";

const $host = axios.create({
    baseURL: 'https://api.tdumz.com/api'
})

export {
    $host
}