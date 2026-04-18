import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchslice'

function Tabs() {
    const Activetab= useSelector((state)=>state.searchslice.activeTab)
    const dispatch = useDispatch()
  return (
    <div className='flex gap-5 w-full '>
        <button className={` px-6 py-2 ${(Activetab=="picture"?"bg-blue-500":"bg-gray-600")} rounded active:scale-95 transform transition-all`}  onClick={()=>{
            dispatch(setActiveTab("picture"))
        }}  >photos</button>
        <button className={` px-6 py-2 ${(Activetab=="videos"?"bg-blue-500":"bg-gray-600")} rounded active:scale-95 transform transition-all`} 
        onClick={()=>{
            dispatch(setActiveTab("videos"))
        }} >videos</button>
    </div>
  )
}

export default Tabs