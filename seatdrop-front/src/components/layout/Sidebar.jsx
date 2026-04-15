import { useNavigate, useLocation } from 'react-router-dom'

const menuItems = [
  { icon: "🏠", label: "Feed", path: "/" },
  { icon: "🎟", label: "Draws", path: "/draws" },
  { icon: "➕", label: "Vendre", path: "/vendre" },
  { icon: "🔨", label: "Enchères", path: "/encheres" },
  { icon: "👤", label: "Profil", path: "/profil" },
]

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="bg-white rounded-xl border border-light overflow-hidden sticky top-6">
      {menuItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`w-full flex items-center gap-3 px-4 py-3.5 border-b border-light last:border-none hover:bg-gray-50 transition-colors
            ${location.pathname === item.path ? 'bg-green/5 border-l-4 border-l-green' : ''}`}
        >
          <span className="text-lg">{item.icon}</span>
          <span className={`font-condensed font-bold text-sm uppercase tracking-wide
            ${location.pathname === item.path ? 'text-green' : 'text-navy'}`}>
            {item.label}
          </span>
        </button>
      ))}
    </div>
  )
}

export default Sidebar