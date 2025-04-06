import { useState } from 'react'
import './App.css'
import SplashCursor from './componentes/SplashCursor'
import FirstPage from './pages/Firstpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <SplashCursor/>

    <FirstPage/>
    </>
  )
}

export default App
