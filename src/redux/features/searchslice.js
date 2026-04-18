import { createSlice } from "@reduxjs/toolkit";

export const searchslice = createSlice({
  name: "search",
  initialState: {
    activeTab: "picture",
    query: '',
    data: [],
    isLoading: true,
    error: null,
  },
  reducers:{
    setQuery(state,action){
        state.query = action.payload
    },
    setActiveTab(state,action){
        state.activeTab = action.payload
    },
    setResult(state,action){
        state.data = action.payload
        state.isLoading=false
    },
    setLoading(state){
        state.isLoading= true
        state.error= false
    },
    setError(state,action){
        state.error=action.payload
        state.isLoading=false    }
  }
});
export const{ setQuery,setActiveTab, setResult ,setLoading, setError  } = searchslice.actions
export default searchslice.reducer