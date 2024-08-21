import { useState } from 'react';
import { Card } from './Card';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

export const Carousel = ({ projects }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current) => current === projects.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent((current) => current === 0 ? projects.length - 1 : current + 1)
  }
  
  return (
    <div className='carousel'>
      <button onClick={prevSlide} className='carousel-btn'>
        <FaChevronCircleLeft />
      </button>
      <div className='carousel-cards'>
        {projects.map(project => (
          <div className={`carousel-card ${i === current ? "active" : ''}`} key={i}>
            <Card 
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className='carousel-btn'>
        <FaChevronCircleRight />
      </button>
    </div>
  )
}