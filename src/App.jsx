
import './App.css'
import { useState } from 'react'
import Menu from './comp/Menu'
import Home from './pages/Home'
import Slike from './pages/Slike'
import Kontakt from './pages/Kontakt'
import ONama from './pages/ONama'
import Usluge from './pages/Usluge'

function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)



window.addEventListener('resize', function(event) {
  setScreenWidth(window.innerWidth)
  console.log("🚀 ~ file: Menu.jsx:48 ~ Menu ~ screenWidth", screenWidth)
}, true);

  return (
    <div className="App">
<Menu screenWidth={screenWidth}/>
<Home />
<Slike screenWidth={screenWidth}/>
<Kontakt />
<ONama />
<Usluge />
    </div>
  )
}

export default App
