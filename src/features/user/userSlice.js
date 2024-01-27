import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { authService } from "./userService"
import { base_url } from "../../utils/axiosConfig"
import { toast } from 'react-toastify'
import axios from "axios"

const initialState = {
    user: '',
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
    redirectToLogin: false,
    redirectToHome: false
}


export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
        try {
            // console.log('Register User Data', userData);
            // return await authService.register(userData)
            const response = await axios.post(`${base_url}/user/register`, userData)
            console.log('Register Response Data', response.data);
        } catch (error) {
            
            console.log('Thunk Register Error', error?.response?.data);
            return thunkAPI.rejectWithValue(error?.response?.data)
            
            
        }
    }
)


export const loginUser = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            console.log("sdfdf", userData)
            const response = await axios.post(`${base_url}/user/login`, userData)
            // return await authService.login(userData)
            console.log('Login Response Data', response.data);
            return response.data
        } 
        catch (error) {
            console.log("errrrrrr ", error?.response?.data)
            return thunkAPI.rejectWithValue(error?.response?.data)
        }
    }
)




export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setRedirectToLogin: (state, action) => {
            state.redirectToLogin = action.payload
        },

        setRedirectToHome: (state, action) => {
            state.redirectToHome = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
                state.redirectToLogin = true
                if (state.isSuccess) {
                    toast.success('User Created Successfully')
                }
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = payload.message
                if (state.isSuccess === false) {
                    toast.error(state.message)
                }
            })


            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.user = payload 
                state.redirectToHome = true
                if (state.isSuccess === true) {
                    localStorage.setItem('token', payload.token)
                    toast.success('Login Is Successful!')
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.error
                if (state.isError === false) {
                    toast.error(action.error)
                }
            })
    }
})


console.log(authSlice)


export const { setRedirectToLogin, setRedirectToHome } = authSlice.actions

export default authSlice.reducer