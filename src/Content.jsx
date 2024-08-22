import { About } from "./components/About"
import { Home } from "./components/Home"
import { Portfolio } from "./components/Portfolio"
import { Contact } from "./components/Contact"

export const Content = () => {
  return (
    <main className="container">
      <Home />
      <hr className="page_break"/>
      <About />
      <hr className="page_break"/>
      <Portfolio />
      <hr className="page_break"/>
      <Contact />
    </main>
  )
}