import {$host} from "./index";



export const createType = async (type) => {
    const {data} = await $host.post('/chapter', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('/chapter')
    return data
}

export const createItem = async (item) => {
    const {data} = await $host.post('/item', item)
    return data
}

export const fetchItems = async () => {
    const {data} = await $host.get('/item')
    return data
}

export const fetchOneType = async (id) => {
    const {data} = await $host.get('/chapter/'+id)
    return data
}

export const deleteOneItem = async (id) => {
    const {data} = await $host.delete('/item/'+id)
    return data
}

export const deleteOneType = async (id) => {
    const {data} = await $host.delete('/chapter/'+id)
    return data
}