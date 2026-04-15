import { fakeMatch } from '../../data/fakeData'

function MatchHero() {
  return (
    <div className="mx-3 mt-3 rounded-xl overflow-hidden border border-light bg-white">
      
      {/* Barre compétition */}
      <div className="bg-navy px-3 py-1.5 flex justify-between items-center">
        <span className="font-condensed font-bold text-xs uppercase tracking-wide text-white/70">
          {fakeMatch.competition}
        </span>
        <span className="text-xs text-white/40">
          {fakeMatch.round}
        </span>
      </div>

      {/* Corps du match */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          
          {/* Equipe domicile */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-14 h-14 rounded-full border-2 border-light flex items-center justify-center bg-gray-50">
              <span className="text-2xl">⚽</span>
            </div>
            <span className="font-condensed font-bold text-sm uppercase tracking-wide text-center">
              {fakeMatch.equipe_domicile}
            </span>
          </div>

          {/* VS + date */}
          <div className="flex flex-col items-center gap-1 px-3">
            <span className="font-condensed font-black text-3xl text-light tracking-widest">
              VS
            </span>
            <span className="text-xs text-muted text-center leading-relaxed">
              <b className="text-navy block text-sm">15 Avril 2025</b>
              21h00 • {fakeMatch.stade}
            </span>
          </div>

          {/* Equipe extérieur */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-14 h-14 rounded-full border-2 border-light flex items-center justify-center bg-gray-50">
              <span className="text-2xl">⚽</span>
            </div>
            <span className="font-condensed font-bold text-sm uppercase tracking-wide text-center">
              {fakeMatch.equipe_exterieur}
            </span>
          </div>

        </div>
      </div>

      {/* Footer tags */}
      <div className="bg-gray-50 border-t border-light px-3 py-2 flex gap-2">
        <span className="text-[10px] font-bold px-2 py-1 rounded bg-navy text-white/80 uppercase tracking-wide">
          UCL
        </span>
        <span className="text-[10px] font-bold px-2 py-1 rounded bg-orange/10 text-orange border border-orange/30 uppercase tracking-wide">
          🔥 Trending
        </span>
      </div>

    </div>
  )
}

export default MatchHero