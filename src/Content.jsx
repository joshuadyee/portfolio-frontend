import { About } from "./components/About"
import { Home } from "./components/Home"

export const Content = () => {
  return (
    <main className="container">
      <Home />
      <hr className="page_break"/>
      <About />
    </main>
  )
}