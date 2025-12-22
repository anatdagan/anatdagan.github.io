import indieDevLogo from './assets/לוגו-removebg-preview.png'
import anatSmallPic from './assets/PHOTO-anat-dagan-small.webp'
import anatCropPic from './assets/PHOTO-anat-dagan-crop.webp'
import CheckmarkSquare from './assets/checkmark-square.svg?react'

import './App.css'

function App() {


  return (
    <>
      <header className="flex justify-center items-center h-1/2 text-violet-500">
        <div className="grow text-center">
          <h2 >אז מה זה בעצם</h2>
          <h1 className="text-violet-500">תכנות עצמאי?</h1>
        </div>
        <div>
          <div className="logo"><img src={indieDevLogo} alt="Indie Dev Logo" width={200} height={200}/></div>
        </div>
      </header>
      <main className="card">
<picture>
  <source srcSet={anatCropPic} media="(min-width: 600px)" />
  <img src={anatSmallPic} alt="Anat Dagan" width={300} height={300}/>
</picture>
        <ul>
          <li>
            <h3 className="text-2xl font-bold flex items-center"><span><CheckmarkSquare width={24} height={24} className="text-emerald-500 fill-current"/></span>מקצועיות</h3>
            <p>29 </p>
          </li>
          <li>
            <h3 className="text-2xl font-bold flex items-center"><span><CheckmarkSquare width={24} height={24} className="text-emerald-500 fill-current"/></span>יחס אישי</h3>
            <p></p>
          </li>
          <li>
            <h3 className="text-2xl font-bold flex items-center"><span><CheckmarkSquare width={24} height={24} className="text-emerald-500 fill-current"/></span>יצירתיות</h3>
            <p></p>
          </li>
        </ul>
      </main>
    </>
  )
}

export default App
