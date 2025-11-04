import React, { useState } from 'react'
import Intro from './Homepage/Transporter'
import Vendor from './Homepage/Vendor'
import Farmer from './Homepage/Farmer'

const App = () => {
  const [page, setPage] = useState('transporter') // default page

  return (
    <div>
      <div className="flex justify-center gap-4 mt-10 mb-10">
        <button
          onClick={() => setPage('transporter')}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            page === 'transporter'
              ? 'bg-orange-500 text-white shadow'
              : 'bg-gray-200 text-gray-700 hover:bg-orange-100'
          }`}
        >
          Transporter
        </button>
        <button
          onClick={() => setPage('vendor')}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            page === 'vendor'
              ? 'bg-blue-600 text-white shadow'
              : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
          }`}
        >
          Vendor
        </button>
        <button
          onClick={() => setPage('farmer')}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            page === 'farmer'
              ? 'bg-green-600 text-white shadow'
              : 'bg-gray-200 text-gray-700 hover:bg-green-100'
          }`}
        >
          Farmer
        </button>
      </div>
      <div>
        {page === 'transporter' && <Intro />}
        {page === 'vendor' && <Vendor />}
        {page === 'farmer' && <Farmer />}
      </div>
    </div>
  )
}

export default App
