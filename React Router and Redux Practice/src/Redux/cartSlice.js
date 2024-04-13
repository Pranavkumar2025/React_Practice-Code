import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "Cart",
    
    initialState : {
        items : [],
    },
    reducers : {
        addItems : (state,action)=>{
            state.items.push(action.payload);
        },
        removeItems : (state)=>{
            state.items.pop();
        },
        EmptyBin : (state)=>{
            state.items.length = 0
        }
    }
})

export const { addItems, removeItems, EmptyBin} = cartSlice.actions;

export default cartSlice.reducer;