import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sliding: false,
    direction: '',
    position: 0,
    numItems: 0
}

const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        setSliding: (state, action) => {
            console.log('Slider:', action.payload)
            state.sliding = action.payload
        },
        setDirection: (state, action) => {
            console.log('Change Direction:', action.payload)
            state.direction = action.payload
        },
        setPosition: (state, action) => {
            console.log('Change Position:', action.payload)
            state.position = action.payload
        }
    }
})


export const { setSliding, setDirection, setPosition } = carouselSlice.actions

export default carouselSlice.reducer