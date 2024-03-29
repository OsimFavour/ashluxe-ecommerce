import axios from "axios"
import { base_url } from "../../utils/axiosConfig"

const getProducts = async () => {
    const response = await axios.get(`${base_url}/admin/products`)
    if (response.data) {
        return response.data
    }
}  


export const productService = {
    getProducts
}