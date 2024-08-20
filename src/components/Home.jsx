import { Cube } from "./Cube"
import { HomeButtons } from "./HomeButtons"

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="landing_screen">
        <div className="title_container">
          <h1 className="my_name">
            <span className="letter">J</span>
            <span className="letter">o</span>
            <span className="letter">s</span>
            <span className="letter">h</span>
            <span className="letter">u</span>
            <span className="letter last">a</span>
            <span className="letter">Y</span>
            <span className="letter">e</span>
            <span className="letter">e</span>
          </h1>
          <h1 className="job_title">
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
          </h1>
          <hr className="border"/>
          <div className="subheading">
            <h3>Full-Stack</h3>
            <h3>•</h3>
            <h3>React</h3>
            <h3>•</h3>
            <h3>Ruby on Rails</h3>
          </div>
          {/* <div className="subheading contact">
            Los Angeles • (626) 808-2891
          </div> */}
        </div>
        <Cube />
      </div>
      {/* <HomeButtons  /> */}
    </section>
  )
}  