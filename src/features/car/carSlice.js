import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cars: ['Model S', 'Model 3', 'Model X', 'Model Y']
}


let carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {}
})


export let selectCars = state => state.car.cars

export default carSlice.reducer