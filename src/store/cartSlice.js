import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { useSelector } from "react-redux";


let Ldata = JSON.parse(localStorage.getItem("box"))

const cartSlice = createSlice({
    name : "cart",
    initialState : Ldata,
    reducers:{
        addItem(state,action){
            state.push(action.payload)
            localStorage.setItem("box",JSON.stringify([...state]))

        },
        removeItem(state,action){
            let newProducts = state.filter((product)=>{ return (product.id !== action.payload)})
            localStorage.setItem("box",JSON.stringify([...newProducts]))

            return newProducts
        }
    }
})

export default cartSlice.reducer

export let {addItem,removeItem} = cartSlice.actions