import { createSlice } from "@reduxjs/toolkit";

 export const counterSlice = createSlice({
    name:"counter",
    initialState: {
    value: 0
  },
    reducers:{
        increment:(state)=>{
            state.value++
        },
        decrement:(state)=>{
            state.value--
        },
        inceaseBynum:(state,actions)=>{
            state.value = state.value + actions.payload
        }
    }
})
export const {increment,decrement,inceaseBynum} = counterSlice.actions
export default counterSlice.reducer