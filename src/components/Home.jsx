import { Cube } from "./Cube"
import { Links } from "./Links"

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="landing_screen">
        <div className="title_container">
          <h1 className="my_name">
            Joshua Yee
          </h1>
          <h1 className="job_title">
            Software Developer
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
      <Links />
    </section>
  )
}  