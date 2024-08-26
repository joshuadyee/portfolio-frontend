export const Card = ({ title, description, image, stack }) => {
  return (
    // <a href="#home">
      <div className="card">
        <img src={image} alt={title} className="card-image"/>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
          <p className="card-stack">{stack.join(" • ")}</p>
        </div>
      </div>
    // </a> 
  )
}