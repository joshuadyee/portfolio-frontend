import { Card } from './Card';

const projects = [
  {
    id: 1,
    title: "Cinesthesia",
    description: "A social cataloging website where users can rate, review, and share their thoughts on their favorites films with likeminded members of the community.",
    image: "/assets/cinesthesia-pic.png",
    stack: ["React", "Tailwind CSS", "Ruby on Rails", "PostgreSQL"],
    link: "https://github.com/joshuadyee/cinesthesia-frontend"
  },
  {
    id: 2,
    title: "Blockchain Explorer",
    description: "A web application that allows users to search for information on any block on the Bitcoin blockchain.",
    image: "https://images.theconversation.com/files/529878/original/file-20230602-15-hjwz91.jpg?ixlib=rb-4.1.0&rect=25%2C0%2C5665%2C3788&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    stack: ["React", "Material UI", "Chart.js"]
  },
  {
    id: 3,
    title: "Break and Run",
    description: "A web application that allows users to search users in their radius to play pool with.",
    image: "https://blog.watsons.com/hubfs/pool%20balls.png",
    stack: ["React", "Tailwind CSS", "Google Maps API", "Ruby on Rails", "PostgreSQL"]
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
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}