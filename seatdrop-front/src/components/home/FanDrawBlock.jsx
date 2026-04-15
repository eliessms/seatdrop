import { fakeFanDraw } from '../../data/fakeData'

function FanDrawBlock() {
  const pourcentage = Math.round(
    (fakeFanDraw.nb_slots_remplis / fakeFanDraw.nb_slots_total) * 100
  )

  return (
    <div className="mx-3 mt-2.5 rounded-xl overflow-hidden border border-light bg-white">

      {/* Header vert */}
      <div className="bg-green px-3 py-2 flex justify-between items-center">
        <span className="font-condensed font-bold text-sm uppercase tracking-widest text-white">
          🎟 Fan Draw
        </span>
        <div className="font-condensed font-black text-white text-lg flex items-center gap-1">
          <span className="bg-black/20 px-2 py-0.5 rounded text-base animate-pulse">
            02:34:17
          </span>
        </div>
      </div>

      {/* Corps */}
      <div className="p-4">

        {/* Prix + infos */}
        <div className="flex items-center gap-4 mb-3">
          <div className="bg-green/10 border-2 border-green rounded-lg px-4 py-2.5 text-center min-w-[88px]">
            <div className="font-condensed font-black text-4xl text-green leading-none">
              {fakeFanDraw.prix_par_slot}€
            </div>
            <div className="text-[10px] font-bold text-green uppercase tracking-wide mt-1">
              par slot
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm text-navy mb-1">
              <b>Tribune Auteuil</b> — PSG vs Bayern
            </p>
            <p className="text-xs text-muted">
              Valeur faciale : {fakeFanDraw.valeur_faciale}€
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-3 bg-light rounded-full overflow-hidden mb-1.5">
          <div
            className="h-full bg-orange rounded-full transition-all duration-700"
            style={{ width: `${pourcentage}%` }}
          />
        </div>

        {/* Infos progress */}
        <div className="flex justify-between mb-3">
          <span className="font-condensed font-bold text-sm text-orange">
            {pourcentage}%
          </span>
          <span className="text-xs text-muted">
            <b className="text-navy">{fakeFanDraw.nb_slots_remplis}</b>
            /{fakeFanDraw.nb_slots_total} slots
          </span>
        </div>

        {/* Participants */}
        <div className="flex items-center mb-3">
          {["🧑", "👩", "👨", "🧔"].map((emoji, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full border-2 border-white bg-light flex items-center justify-center text-xs -ml-1.5 first:ml-0"
            >
              {emoji}
            </div>
          ))}
          <span className="text-xs text-muted font-bold ml-2">
            +30 participants
          </span>
        </div>

        {/* Bouton CTA */}
        <button className="w-full py-3.5 rounded-lg bg-green text-white font-condensed font-black text-lg uppercase tracking-wide">
          Participer au tirage
        </button>

        {/* Garantie */}
        <div className="mt-2.5 flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg border border-light">
          <span className="text-lg">🔒</span>
          <p className="text-[11px] text-muted leading-snug">
            <b className="text-navy">Remboursement garanti</b> si le tirage
            n'atteint pas 100% des slots
          </p>
        </div>

      </div>
    </div>
  )
}

export default FanDrawBlock