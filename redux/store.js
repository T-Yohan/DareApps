import { configureStore } from '@reduxjs/toolkit'

import counterReducer from  './counter' ;
import categoryReducer from './category'; 
import dareOrTruthReducer from './dareOrTruth';
export const store = configureStore({
    reducer: { 
        counter  : counterReducer, 
        category : categoryReducer,
        dareOrTruth : dareOrTruthReducer,
    },
})