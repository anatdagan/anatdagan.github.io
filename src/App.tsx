import indieDevLogo from './assets/לוגו-removebg-preview.png'
import anatSmallPic from './assets/PHOTO-anat-dagan-small.webp'
import anatCropPic from './assets/PHOTO-anat-dagan-crop.webp'
import { MonitorCheck } from 'lucide-react';

import './App.css'

function App() {


  return (
    <div className="h-full">
      <header className="flex justify-center bg-violet-50 text-violet-500 p-2 md:p-8">
        <div>
          <div className="logo"><img src={indieDevLogo} alt="Indie Dev Logo" className="w-48 md:w-64"/></div>
        </div>
        <div className="grow text-center py-2">
          <h2 className="text-violet-500 text-2xl md:text-6xl">אז מה זה בעצם</h2>
          <h1 className="text-violet-800 font-bold text-4xl md:text-8xl p-2">תכנות עצמאי?</h1>
        </div>
      </header>
    
      <main className="bg-violet-800 text-violet-50 h-full flex justify-center">
        <div className="md:flex">
<picture>
  <source media="(min-width: 465px)" srcSet={anatCropPic}/>
  <img src={anatSmallPic} alt="ענת דגן"/>
</picture>
        <ul>
          <li>
            <h3 className="text-2xl font-bold flex items-center"><span><MonitorCheck size={44} color="#34d399" strokeWidth={3} /></span>מקצועיות</h3>
            <p>29 </p>
          </li>
          <li>
            <h3 className="text-2xl font-bold flex items-center"><span><MonitorCheck size={44} color="#fbbf24" strokeWidth={3} /></span>יחס אישי</h3>
            <p></p>
          </li>
          <li>
            <h3 className="text-2xl font-bold flex items-center"><span><MonitorCheck size={44} color="#f97316" strokeWidth={3} /></span>יצירתיות</h3>
            <p></p>
          </li>
        </ul>
      </div>
      </main>
    </div>
  )
}

export default App
