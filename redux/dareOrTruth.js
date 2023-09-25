import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

export const dareOrTruth = createSlice ({
    name:'dareOrTruth',
    initialState: initialState,
    reducers:{
        addDareOrTruth: (state,action)=>{
            console.log('action.payload' ,action.payload);
            return action.payload;
        }
    }
})
export const {addDareOrTruth} = dareOrTruth.actions

export default dareOrTruth.reducer