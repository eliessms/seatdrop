import { useNavigate } from 'react-router-dom'

function ListingCard({ listing }) {
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-xl border border-light p-3 flex justify-between items-center">

      {/* Infos gauche */}
      <div className="flex-1">
        <p className="font-condensed font-bold text-sm uppercase tracking-wide text-navy">
          {listing.match.equipe_domicile} vs {listing.match.equipe_exterieur}
        </p>
        <p className="text-xs text-muted mt-0.5">
          📍 {listing.zone_placement}
        </p>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-xs text-muted">
            @{listing.vendeur.pseudo}
          </span>
          <span className="text-xs font-bold text-gold">
            ⭐ {listing.vendeur.score_confiance}
          </span>
          {listing.billet_verifie && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-green/10 text-green border border-green/20">
              ✓ Vérifié
            </span>
          )}
        </div>
      </div>

      {/* Prix + bouton droite */}
      <div className="flex flex-col items-end gap-2 ml-3">
        <span className="font-condensed font-black text-2xl text-navy">
          {listing.prix}€
        </span>
        <button
          onClick={() => navigate(`/listing/${listing.id}`)}
          className={`px-3 py-1.5 rounded-lg font-condensed font-bold text-sm text-white
            ${listing.mode === 'enchere' ? 'bg-orange' : 'bg-green'}`}>
          {listing.mode === 'enchere' ? 'Enchérir' : 'Acheter'}
        </button>
      </div>

    </div>
  )
}

export default ListingCard