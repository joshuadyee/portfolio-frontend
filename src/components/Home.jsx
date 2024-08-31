import { Links } from "./Links"
import { Cube } from "./Cube"

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="landing_screen">
        <div className="title_container">
          <h1 className="my_name">
            <span>J</span>
            <span>o</span>
            <span>s</span>
            <span>h</span>
            <span>u</span>
            <span className="last-letter">a</span>
            <span>Y</span>
            <span>e</span>
            <span>e</span>
          </h1>
          <h1 className="job_title">
            <span>S</span>
            <span>o</span>
            <span>f</span>
            <span>t</span>
            <span>w</span>
            <span>a</span>
            <span>r</span>
            <span className="last-letter">e</span>
            <span>D</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </h1>
          <hr className="border"/>
          <div className="subheading">
            <h3>Full-Stack</h3>
            <h3>•</h3>
            <h3>React</h3>
            <h3>•</h3>
            <h3>Ruby on Rails</h3>
          </div>
        </div>
        <Cube />
      </div>
      <Links />
    </section>
  )
}  