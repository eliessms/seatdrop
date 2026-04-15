function LiveBanner() {
  return (
    <div className="bg-red px-4 py-1.5 flex items-center gap-2">
      
      {/* Point clignotant */}
      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
      
      {/* Texte */}
      <span className="font-condensed font-bold text-xs uppercase tracking-widest text-white flex-1">
        Marché en direct
      </span>

      {/* Compteur */}
      <span className="text-xs font-bold text-white/80">
        247 billets disponibles
      </span>

    </div>
  )
}

export default LiveBanner