import * as AxiosService from '../services/axiosService'

const axios = AxiosService.axiosService;

const URL = "coupones"

const getByCode = async (code) => {
    return axios.get(`${URL}/code/${code}`)
        .then(e => e.data)
}


export { getByCode }
