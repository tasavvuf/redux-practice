import React from 'react'

function ResultCard({ item }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-48 w-full overflow-hidden bg-gray-200">
        {item.type === 'picture' && (
          <img
            src={item.src}
            alt={item.tittle}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        )}

        {item.type === 'video' && (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="p-3">
        <p className="line-clamp-2 text-sm font-medium text-gray-800">
          {item.tittle || 'Untitled'}
        </p>
      </div>
    </div>
  )
}

export default ResultCard
