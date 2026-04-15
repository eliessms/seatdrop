import { fakeListings } from '../../data/fakeData'
import ListingCard from './ListingCard'

function ListingList() {
  return (
    <div className="mx-3 mt-4">

      {/* Titre section */}
      <div className="flex justify-between items-center mb-3">
        <span className="font-condensed font-bold text-sm uppercase tracking-wide text-muted flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse inline-block" />
          Billets disponibles
        </span>
        <span className="text-xs text-green font-bold cursor-pointer">
          Voir tout
        </span>
      </div>

      {/* Liste */}
      <div className="flex flex-col gap-2">
        {fakeListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

    </div>
  )
}

export default ListingList