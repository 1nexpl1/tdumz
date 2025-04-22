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

export const fetchOneItem = async (id) => {
    const {data} = await $host.get('/item/'+id)
    return data
}

export const createOrder = async (order) => {
    const {data} = await $host.post('/order/', order)
    return(data)
}