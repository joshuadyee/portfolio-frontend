import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./components/Home"

export const Content = () => {
  return (
    <main className="container">
      <Header />
      <Home />
      <Footer />
    </main>
  )
}