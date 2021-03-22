import axios from 'axios';

export const getClientDatas =  () => {
    return axios.get('/api/clients')
}

export const addClientData = (data) => {
    return axios.post('/api/clients', data)
}

export const deleteClientData = (id) => {
    return axios.delete(`/api/clients/${id}`)
}

export const editClientData = (id, data) => {
    return axios.patch(`/api/clients/${id}`, data)
}

export const unsubscribeClient = (id) => {
    return axios.patch(`/api/clients/${id}`)
}