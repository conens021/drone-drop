import * as AxiosService from '../services/axiosService'

const axios = AxiosService.axiosService;

const URL = "orders"

const createOrder = async (order) => {
    return axios.post(`${URL}`, order)
        .then(e => e.data)
}

const getOrderBySku = async (sku) => {
    return axios.get(`${URL}/sku/${sku}`)
}

export { createOrder,getOrderBySku }
