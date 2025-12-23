
import { MonitorCheck } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import List from './components/List';
import './App.css'

function App() {


  return (
    <div className="h-full min-h-screen min-w-screen">
        <Header/>
    
        <main className="bg-violet-800 text-violet-50 h-full min-h-screen flex justify-center">
            <div className="md:flex">
                <Hero/>
                <List items={[
                    {
                        icon: <MonitorCheck size={44} color="#34d399" strokeWidth={3}/>,
                        text: "מקצועיות",
                        description: "ב29 השנים בהן אני עוסקת בפיתוח תוכנה באופן מקצועי (כמתכנתת וכראש צוות פיתוח), רכשתי ניסיון רב, שעומד לרשות לקוחותיי."
                    },
                    {
                        icon: <MonitorCheck size={44} color="#fbbf24" strokeWidth={3}/>,
                        text: "יחס אישי",
                        description: "השאיפה שלי היא לספק ללקוחות את המוצרים שהם חלמו עליהם. לשם כך אני נמצאת עימם בקשר שוטף, וזמינה לכל בקשה ושאלה."
                    },
                    {
                        icon: <MonitorCheck size={44} color="#f97316" strokeWidth={3}/>,
                        text: "יצירתיות",
                        description: "יודעים מה אתם צריכים אבל לא בטוחים איך להגיע לשם? ואולי אתם לא בטוחים מה בדיוק אתם צריכים? אני אשתמש בידע, ניסיון ודמיון כדי להציע לכם פתרונות מתאימים."
                    }
                ]}/>
      </div>
      </main>
    </div>
  )
}

export default App
