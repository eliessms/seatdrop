export const fakeMatch = {
  id: 1,
  equipe_domicile: "PSG",
  equipe_exterieur: "Bayern Munich",
  competition: "UEFA Champions League",
  round: "Quarts de finale",
  date_match: "2025-04-15T21:00:00",
  stade: "Parc des Princes",
  ville: "Paris",
  est_trending: true,
  statut: "a_venir",
}

export const fakeFanDraw = {
  id: 1,
  match: fakeMatch,
  prix_par_slot: 15,
  nb_slots_total: 50,
  nb_slots_remplis: 34,
  date_fin: "2025-04-14T18:00:00",
  zone_placement: "Tribune Auteuil",
  valeur_faciale: 180,
}

export const fakeListings = [
  {
    id: 1,
    match: fakeMatch,
    mode: "vente_directe",
    prix: 220,
    zone_placement: "Tribune Boulogne",
    statut: "actif",
    vendeur: { pseudo: "FanPSG75", score_confiance: 4.8 },
    billet_verifie: true,
  },
  {
    id: 2,
    match: fakeMatch,
    mode: "enchere",
    prix: 150,
    zone_placement: "Virage Sud",
    statut: "actif",
    vendeur: { pseudo: "Ultras_Paris", score_confiance: 4.5 },
    billet_verifie: true,
  },
  {
    id: 3,
    match: { ...fakeMatch, equipe_domicile: "OM", equipe_exterieur: "Lyon" },
    mode: "vente_directe",
    prix: 95,
    zone_placement: "Virage Nord",
    statut: "actif",
    vendeur: { pseudo: "MarseilleFan", score_confiance: 4.2 },
    billet_verifie: false,
  },
]