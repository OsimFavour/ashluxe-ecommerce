import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { productService } from "./productService"
import { toast } from 'react-toastify'


const initialState = {
    product: '',
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
}


export const getAllProducts = createAsyncThunk(
    'product/get',
    async (thunkAPI) => {
        try {
            return await productService.getProducts()
        } 
        catch (error) {
            console.log("product errrrrrr", error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllProducts.fulfilled, (state, { payload }) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.product = payload
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.error
                if (state.isSuccess === false) {
                    toast.error(state.message)
                }
            })

    }
})


console.log(productSlice)


export default productSlice.reducer