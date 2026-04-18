import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchslice'
function Searchbar() {
      const [query, setquery] = useState()
      const dispatch = useDispatch()

  const handleSearch = (e)=>{
    e.preventDefault()
    dispatch(setQuery(query))
  }
  return (
<form onSubmit={handleSearch} className=' flex py-6 bg-gray-950 gap-3 justify-between'>
  <input
  className='bg-gray-700   w-full px-4 py-2 outline-0  border-pink-400/70 border-2 rounded'
    required
    type="text"
    placeholder="search here"
    value={query}
    onChange={(e) => setquery(e.target.value)}
  />
  <button className=' bg-gray-700 active:scale-95  transition-all  hover:bg-pink-500  border-pink-400/70 px-4 py-2 border-2 rounded  ' type="submit">search</button>
</form>
  )
}

export default Searchbar