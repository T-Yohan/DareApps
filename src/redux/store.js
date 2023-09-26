import {configureStore} from '@reduxjs/toolkit'
import player from "./player";
import loading from './loading';



export const store = configureStore({
    reducer:{
        player:player,
        //j'informe le store de l'existence loading*
        loading : loading,
    },
})