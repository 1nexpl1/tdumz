import {$host} from "./index";

export const fetchItems = async () => {
    const {data} = await $host.get('/item')
    return data
}


export const fetchTypes = async () => {
    const {data} = await $host.get('/chapter')
    return data
}

export const fetchOneType = async (id) => {
    const {data} = await $host.get('/chapter/'+id)
    return data
}