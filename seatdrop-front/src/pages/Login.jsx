function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 bg-navy">
      
      {/* Logo */}
      <div className="text-center mb-8">
        <span className="font-condensed font-black text-4xl text-white tracking-wide">
          SEAT<span className="text-green">DROP</span>
        </span>
        <p className="text-white/40 text-sm mt-1">Billets football certifiés</p>
      </div>

      {/* Formulaire */}
      <div className="bg-white rounded-2xl p-6">
        <h2 className="font-condensed font-bold text-xl text-navy mb-4 uppercase">
          Connexion
        </h2>

        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-light rounded-lg px-4 py-3 text-sm outline-none focus:border-green"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full border border-light rounded-lg px-4 py-3 text-sm outline-none focus:border-green"
          />
          <button className="w-full bg-green text-white font-condensed font-bold text-lg py-3 rounded-lg uppercase tracking-wide mt-1">
            Se connecter
          </button>
        </div>

        <p className="text-center text-sm text-muted mt-4">
          Pas de compte ?{" "}
          <span className="text-green font-bold cursor-pointer">
            S'inscrire
          </span>
        </p>
      </div>

    </div>
  )
}

export default Login