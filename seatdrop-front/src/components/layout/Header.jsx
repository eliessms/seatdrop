import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  return (
    <div className="bg-navy px-4 pt-4">
      
      {/* Logo + Actions */}
      <div className="flex justify-between items-center mb-3">
        
        {/* Logo */}
        <div>
          <span className="font-condensed font-black text-2xl text-white tracking-wide">
            SEAT<span className="text-green">DROP</span>
          </span>
          <span className="block text-[9px] text-white/40 uppercase tracking-widest">
            Billets football certifiés
          </span>
        </div>

        {/* Boutons */}
        <div className="flex gap-2 items-center">
          <button
            onClick={() => navigate('/login')}
            className="px-3 py-1.5 text-white border border-white/30 rounded-md font-condensed font-bold text-sm">
            Connexion
          </button>
          <button
            onClick={() => navigate('/register')}
            className="px-3 py-1.5 bg-green text-white rounded-md font-condensed font-bold text-sm">
            S'inscrire
          </button>
        </div>

      </div>

      {/* Onglets de navigation */}
      <div className="flex border-b-2 border-white/10 mt-1">
        {["Feed", "Draws", "Enchères", "Mes billets"].map((tab, i) => (
          <button
            key={tab}
            className={`flex-1 py-2.5 font-condensed font-bold text-xs uppercase tracking-wide
              ${i === 0 
                ? "text-white border-b-2 border-green -mb-0.5" 
                : "text-white/40"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

    </div>
  )
}

export default Header