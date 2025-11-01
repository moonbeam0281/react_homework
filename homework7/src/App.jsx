import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CountryPage from '../pages/CountryPage'
import UnknownRoute from '../pages/UnknownRoute'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:name" element={<CountryPage />}/>
        <Route path="*" element={<UnknownRoute />} />
      </Routes>
    </>
  )
}

export default App
