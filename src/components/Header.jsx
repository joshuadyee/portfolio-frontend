import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home")
  
  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  return (
    <header>
      <div className="home-icon">
        <a href="/">
          JY
        </a>
      </div>
      <nav>
        <div className="section-links-container">
          <ul className="section-links">
            <li>
              <a href="#home" className={activeSection === "home" ? "active" : ""} >Home</a>
            </li>
            <li>
              <a href="#about" className={activeSection === "about" ? "active" : ""} >About</a>
            </li>
            <li>
              <a href="#portfolio" className={activeSection === "portfolio" ? "active" : ""} >Portfolio</a>
            </li>
            <li>
              <a href="#contact" className={activeSection === "contact" ? "active" : ""} >Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}