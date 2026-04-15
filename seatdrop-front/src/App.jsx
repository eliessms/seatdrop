import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import BottomNav from './components/layout/BottomNav'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ListingDetail from './pages/ListingDetail'
import Profil from './pages/Profil'

function Layout() {
  const location = useLocation()
  const noLayout = ['/login', '/register'].includes(location.pathname)

  if (noLayout) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header desktop */}
      <div className="hidden md:block">
        <Header />
      </div>

      {/* Contenu principal */}
      <div className="md:flex md:max-w-6xl md:mx-auto">

        {/* Sidebar desktop */}
        <div className="hidden md:block w-56 shrink-0 pt-6 px-4">
          <Sidebar />
        </div>

        {/* Contenu */}
        <div className="flex-1 md:max-w-2xl md:mx-auto">

          {/* Header mobile */}
          <div className="md:hidden">
            <Header />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listing/:id" element={<ListingDetail />} />
            <Route path="/profil" element={<Profil />} />
          </Routes>

        </div>

      </div>

      {/* BottomNav mobile uniquement */}
      <div className="md:hidden">
        <BottomNav />
      </div>

    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App