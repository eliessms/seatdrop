import { useNavigate } from 'react-router-dom'

function BottomNav() {
  const navigate = useNavigate()

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white border-t border-light flex justify-around items-center py-2 z-50">

      <button onClick={() => navigate('/')} className="flex flex-col items-center gap-0.5">
        <span className="text-xl">🏠</span>
        <span className="text-[10px] font-bold text-green">Feed</span>
      </button>

      <button className="flex flex-col items-center gap-0.5">
        <span className="text-xl">🎟</span>
        <span className="text-[10px] font-bold text-muted">Draws</span>
      </button>

      <button className="flex flex-col items-center gap-0.5">
        <span className="text-xl">➕</span>
        <span className="text-[10px] font-bold text-muted">Vendre</span>
      </button>

      <button className="flex flex-col items-center gap-0.5">
        <span className="text-xl">🔨</span>
        <span className="text-[10px] font-bold text-muted">Enchères</span>
      </button>

      <button onClick={() => navigate('/profil')} className="flex flex-col items-center gap-0.5">
        <span className="text-xl">👤</span>
        <span className="text-[10px] font-bold text-muted">Profil</span>
      </button>

    </div>
  )
}

export default BottomNav