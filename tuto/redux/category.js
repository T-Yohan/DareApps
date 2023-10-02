import { createSlice } from "@reduxjs/toolkit"
import { create } from "react-test-renderer"


const categories = [
    {id:1 , name:'All'},
    {id:2 , name:'php'},
    {id:3 , name:'JS'},
    {id:4 , name:'Dot.net'},
]
export const category = createSlice({
    name : "category",
    initialState : categories,

    reducers : {

    },
})
export default category.reducer