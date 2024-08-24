import { Card } from './Card';

const projects = [
  {
    id: 1,
    title: "Cinesthesia",
    description: "A social cataloging website where users can rate, review, and share their thoughts on their favorites films with likeminded members of the community.",
    image: "https://static1.squarespace.com/static/6058f3b0dbb27b03bbd36be9/6058f3f6dbb27b03bbd37503/6058f3f6dbb27b03bbd37530/1614892162972/interstellar.png?format=1500w",
    stack: ["React", "Tailwind CSS", "Ruby on Rails", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Covid-19 Tracker",
    description: "A web application that allows users to track Covid-19 cases by country.",
    image: "https://www.un.org/sites/un2.un.org/files/field/image/1583952355.1997.jpg",
    stack: ["React", "Material UI", "Chart.js"]
  },
  {
    id: 3,
    title: "Weather App",
    description: "A web application that allows users to search for the weather in any city.",
    image: "https://www.bigcountryhomepage.com/wp-content/uploads/sites/56/2019/06/Weather-v2.jpg?w=640&h=360&crop=1",
    stack: ["React", "Tailwind CSS", "OpenWeather API"]
  }
]

export const Portfolio = () => { 
  return (
    <section className="porfolio" id="portfolio">
      <div className="portfolio-container">
        <h1 className="projects-title">
          Portfolio
        </h1>
        <div className="card-container">
          {projects.map((project) => (
            <Card 
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              stack={project.stack}
            />
          ))}
        </div>
      </div>
    </section>
  )
}