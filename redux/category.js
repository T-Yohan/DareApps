import { createSlice } from "@reduxjs/toolkit";

const initState = [] ;

export const category = createSlice({
    name:"category" ,
    initialState: initState,
    reducers: {
        addCategory:(state, action) => {

          //  console.log("state" , state) ;
            return action.payload  ;
        }
    }
})


export const { addCategory } = category.actions ;

export default category.reducer ;
    




