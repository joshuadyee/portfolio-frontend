import './App.css'
import { Content } from "./Content"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
