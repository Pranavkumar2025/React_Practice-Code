import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice';


const cartStore = configureStore({
    reducer : {
        cart : cartSlice
    }
});

export default cartStore;