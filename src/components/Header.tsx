import indieDevLogo from "../assets/לוגו-removebg-preview.png"
function Header() {
    return (
      <header className="flex justify-center bg-violet-50 text-violet-500 p-2 md:p-4">
        <div>
          <div className="logo"><img src={indieDevLogo} alt="Indie Dev Logo" className="w-48 md:w-64"/></div>
        </div>
        <div className="grow text-center py-2">
          <h2 className="text-violet-500 text-2xl md:text-6xl">אז מה זה בעצם</h2>
          <h1 className="text-violet-800 font-bold text-6xl md:text-9xl p-2">תכנות עצמאי?</h1>
        </div>
      </header>
    )
}

export default Header