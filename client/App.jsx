import React from 'react'
import { Routes, Route } from 'react-router-dom'
import OKXPage from './components/okx-replication/OKXPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<OKXPage />} />
    </Routes>
  )
}
