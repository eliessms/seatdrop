import { useNavigate } from 'react-router-dom'
import { fakeListings } from '../data/fakeData'

function ListingDetail() {
  const navigate = useNavigate()
  const listing = fakeListings[0] // on prend le premier pour l'instant

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-navy px-4 py-4 flex items-center gap-3">
        <button
          onClick={() => navigate('/')}
          className="text-white text-xl"
        >
          ←
        </button>
        <span className="font-condensed font-bold text-white text-lg uppercase tracking-wide">
          Détail du billet
        </span>
      </div>

      <div className="p-4 flex flex-col gap-4">

        {/* Card match */}
        <div className="bg-white rounded-xl border border-light p-4">
          <p className="font-condensed font-black text-xl text-navy uppercase">
            {listing.match.equipe_domicile} vs {listing.match.equipe_exterieur}
          </p>
          <p className="text-sm text-muted mt-1">
            📅 15 Avril 2025 — 21h00
          </p>
          <p className="text-sm text-muted">
            📍 {listing.match.stade} — {listing.match.ville}
          </p>
          <p className="text-sm text-muted">
            🏟 {listing.zone_placement}
          </p>
        </div>

        {/* Card vendeur */}
        <div className="bg-white rounded-xl border border-light p-4">
          <p className="font-condensed font-bold text-sm uppercase text-muted mb-2">
            Vendeur
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold">
                {listing.vendeur.pseudo[0]}
              </div>
              <div>
                <p className="font-bold text-navy text-sm">
                  @{listing.vendeur.pseudo}
                </p>
                <p className="text-xs text-muted">
                  ⭐ {listing.vendeur.score_confiance}/5
                </p>
              </div>
            </div>
            {listing.billet_verifie && (
              <span className="text-xs font-bold px-2 py-1 rounded bg-green/10 text-green border border-green/20">
                ✓ Billet vérifié
              </span>
            )}
          </div>
        </div>

        {/* Card prix */}
        <div className="bg-white rounded-xl border border-light p-4">
          <p className="font-condensed font-bold text-sm uppercase text-muted mb-2">
            Prix
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-condensed font-black text-4xl text-navy">
                {listing.prix}€
              </p>
              <p className="text-xs text-muted mt-1">
                Valeur faciale : {listing.match.valeur_faciale || 180}€
              </p>
            </div>
            <div className="bg-green/10 border border-green/20 rounded-lg px-3 py-2 text-center">
              <p className="text-xs font-bold text-green uppercase">Mode</p>
              <p className="font-condensed font-bold text-green">
                {listing.mode === 'vente_directe' ? 'Vente directe' : 'Enchère'}
              </p>
            </div>
          </div>
        </div>

        {/* Garantie */}
        <div className="bg-navy/5 rounded-xl border border-navy/10 p-4 flex gap-3">
          <span className="text-2xl">🔒</span>
          <div>
            <p className="font-bold text-navy text-sm">Paiement sécurisé</p>
            <p className="text-xs text-muted mt-0.5 leading-relaxed">
              Votre paiement est conservé en escrow jusqu'à confirmation de réception du billet.
            </p>
          </div>
        </div>

        {/* Bouton CTA */}
        <button className="w-full py-4 bg-green text-white font-condensed font-black text-xl uppercase tracking-wide rounded-xl">
          {listing.mode === 'enchere' ? '🔨 Placer une enchère' : '🎟 Acheter ce billet'}
        </button>

      </div>
    </div>
  )
}

export default ListingDetail