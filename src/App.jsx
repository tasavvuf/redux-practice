import React, { useState } from 'react'
import { decrement, inceaseBynum, increment } from './redux/features/counter'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispach = useDispatch()
    const count = useSelector((state) => state.counter.value)
  const [num, setnum] = useState(3)
  return (
    <div className='bg-black h-dvh flex flex-col  justify-center items-center gap-5 text-white '>
      <h1 className='text-xl' >{count}</h1>
      <button className='bg-gray-400 p-3 rounded'  onClick={()=>dispach(increment())}>i</button>
      <button  className='bg-gray-400 p-3 rounded' onClick={()=>dispach(decrement())} >d</button>
      <input type="text" value={num} onChange={(e)=>{
        setnum(e.target.value)
      }}/>
      <button className='bg-gray-400 p-3 rounded' onClick={()=>{
        dispach(inceaseBynum(Number(num)))
      }}>increase by input</button>
    </div>
  )
}

export default App