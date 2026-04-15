import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BottomNav from './components/layout/BottomNav'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ListingDetail from './pages/ListingDetail'
import Profil from './pages/Profil'

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-sm mx-auto min-h-screen pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}

export default App