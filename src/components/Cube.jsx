export const Cube = () => { 
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="face top">
          <img className="logo" src="src/assets/tailwindcss.svg" alt="Tailwind logo" />
        </div>
        <div className="face bottom">
          <img className="logo" src="src/assets/css-3.svg" alt="Css logo" />
        </div>
        <div className="face left">
          <img className="logo" src="src/assets/logo-javascript.svg" alt="Javascript logo" />
        </div>
        <div className="face right">
          <img className="logo" src="src/assets/ruby.svg" alt="Ruby logo" />
        </div>
        <div className="face front">
          <img className="logo" src="src/assets/react.svg" alt="React logo" />
        </div>
        <div className="face back">
          <img className="logo" src="src/assets/rails.svg" alt="Rails logo" />
        </div>
      </div>
    </div>
  )
}