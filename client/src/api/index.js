import axios from 'axios'

// Base setup
export const api = axios.create({
    baseURL: process.env.REACT_APP_LOCAL_API_HOST_URL + '/v1'
})

// Endpoints
const getAllRisksData = async () => {
    try {
        const response = await api.get('/risks')
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const getRiskData = async (risk_score) => {
    try {
        const response = await api.get(`/risks/${risk_score}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export {
    getAllRisksData,
    getRiskData
}

