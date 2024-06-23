import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
       
        //user: UserSclice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store;