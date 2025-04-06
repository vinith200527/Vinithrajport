import { useState } from 'react'
import './App.css'
import Firstpage from './pages/Firstpage.jsx'
import SplashCursor from './componentes/SplashCursor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <SplashCursor/>

    <Firstpage/>
    </>
  )
}

export default App
