import axios from "axios"
import { base_url } from "../../utils/axiosConfig"


const register = async (userData) => {
    try {
        
        const response = await axios.post(`${base_url}/user/register`, userData)
        console.log('Login Response Data', response.data);
        return response.data
    }

    catch (error) {
        console.log('Error:', error?.response?.data)
    }
}


const login = async (userData) => {
    try {
        console.log('Login UserData', userData)
        const response = await axios.post(`${base_url}/user/login`, userData)
        console.log('Login Response Data', response.data);
        return response.data
    }

    catch (error) {
        console.log('Error:', error?.response?.data)
    }
}


export const authService = {
    register,
    login
}