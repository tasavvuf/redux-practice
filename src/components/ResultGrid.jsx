import React, { useEffect } from 'react'
import { FetchPhotos, FetchVideos } from '../api/mediaApi'
import { useDispatch, useSelector } from 'react-redux'
import { setResult } from '../redux/features/searchslice'
import ResultCard from './ResultCard'

function ResultGrid() {
  const dispatch = useDispatch()
  const Activetab = useSelector((state) => state.searchslice.activeTab)
  const query = useSelector((state) => state.searchslice.query)
  const results = useSelector((state) => state.searchslice.data)

  useEffect(() => {
    if (!query) return

    const fetchData = async () => {
      let data = []

      if (Activetab === 'picture') {
        const res = await FetchPhotos(query)
        data = res.results.map((e) => ({
          id: e.id,
          type: 'picture',
          tittle: e.alt_description,
          thumbnail: e.urls.thumb,
          src: e.urls.full,
        }))
      } else {
        const res = await FetchVideos(query)
        data = res.videos.map((e) => ({
          id: e.id,
          type: 'video',
          tittle: e.user.name,
          thumbnail: e.image,
          src: e.video_files[0].link,
        }))
      }

      dispatch(setResult(data))
    }

    fetchData()
  }, [query, Activetab, dispatch])

  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {results.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ResultGrid
