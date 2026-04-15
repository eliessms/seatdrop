import { useNavigate } from 'react-router-dom'

function Profil() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-navy px-4 py-4">
        <span className="font-condensed font-bold text-white text-lg uppercase tracking-wide">
          Mon Profil
        </span>
      </div>

      <div className="p-4 flex flex-col gap-4">

        {/* Card identité */}
        <div className="bg-white rounded-xl border border-light p-4 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center text-white font-black text-2xl font-condensed">
            A
          </div>
          <div>
            <p className="font-condensed font-black text-xl text-navy">
              @Anthony
            </p>
            <p className="text-xs text-muted">anthony@email.com</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-green/10 text-green border border-green/20">
                ✓ KYC Basique
              </span>
              <span className="text-xs font-bold text-gold">
                ⭐ 5.0
              </span>
            </div>
          </div>
        </div>

        {/* Wallet */}
        <div className="bg-navy rounded-xl p-4">
          <p className="font-condensed font-bold text-sm uppercase text-white/50 mb-1">
            Mon Wallet
          </p>
          <p className="font-condensed font-black text-4xl text-white">
            0.00€
          </p>
          <button className="mt-3 px-4 py-2 bg-green rounded-lg font-condensed font-bold text-sm text-white uppercase tracking-wide">
            + Recharger
          </button>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl border border-light p-4">
          <p className="font-condensed font-bold text-sm uppercase text-muted mb-3">
            Mes statistiques
          </p>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="font-condensed font-black text-2xl text-navy">0</p>
              <p className="text-xs text-muted">Achats</p>
            </div>
            <div>
              <p className="font-condensed font-black text-2xl text-navy">0</p>
              <p className="text-xs text-muted">Ventes</p>
            </div>
            <div>
              <p className="font-condensed font-black text-2xl text-navy">0</p>
              <p className="text-xs text-muted">Draws</p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="bg-white rounded-xl border border-light overflow-hidden">
          {[
            { icon: "🎟", label: "Mes billets" },
            { icon: "📦", label: "Mes commandes" },
            { icon: "⭐", label: "Mes avis" },
            { icon: "🔔", label: "Notifications" },
            { icon: "⚙️", label: "Paramètres" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-4 py-3.5 border-b border-light last:border-none cursor-pointer hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium text-navy">{item.label}</span>
              </div>
              <span className="text-muted">→</span>
            </div>
          ))}
        </div>

        {/* Déconnexion */}
        <button
          onClick={() => navigate('/login')}
          className="w-full py-3 border-2 border-red rounded-xl font-condensed font-bold text-red uppercase tracking-wide"
        >
          Se déconnecter
        </button>

      </div>
    </div>
  )
}

export default Profil