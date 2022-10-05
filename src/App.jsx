import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home-page/HomePage'
import Cards from './components/cards-component/Cards'
import Start from './components/start-component/Start'
import Results from './components/results-component/Results'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/" element={<Start />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/results" element={<Results />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
