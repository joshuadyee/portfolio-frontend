import { Cube } from "./Cube"

export const Home = () => {
  return (
    <section className="home">
      <div className="title_container">
        <h1>
          <span className="letter">H</span>
          <span className="letter">e</span>
          <span className="letter">y</span>
          <span className="letter">!</span>
        </h1>
        <h1>
          <span className="letter">I</span>
          <span className="letter">'</span>
          <span className="letter last">m</span>
          <span className="letter">J</span>
          <span className="letter">o</span>
          <span className="letter">s</span>
          <span className="letter last">h</span>
          <span className="letter">Y</span>
          <span className="letter">e</span>
          <span className="letter">e</span>
          {/* <span className="letter">,</span> */}
        </h1>
        <h1>
          <span className="letter">S</span>
          <span className="letter">o</span>
          <span className="letter">f</span>
          <span className="letter">t</span>
          <span className="letter">w</span>
          <span className="letter">a</span>
          <span className="letter">r</span>
          <span className="letter last">e</span>
          <span className="letter">D</span>
          <span className="letter">e</span>
          <span className="letter">v</span>
          <span className="letter">e</span>
          <span className="letter">l</span>
          <span className="letter">o</span>
          <span className="letter">p</span>
          <span className="letter">e</span>
          <span className="letter">r</span>
          <hr className="border"/>
        </h1>
        <div className="subheading">
          <h3>Full-Stack</h3>
          <h3>•</h3>
          <h3>React</h3>
          <h3>•</h3>
          <h3>Ruby on Rails</h3>
        </div>
      </div>
      <Cube />
    </section>
  )
}  