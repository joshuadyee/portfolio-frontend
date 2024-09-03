import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    console.log("toggleMenu")
    console.log(isMenuOpen)
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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
        <a href="#home">
          <img src="/assets/JY-Logo-reverse.svg" className="personal-logo" alt="logo" />
        </a>
      </div>
      <nav>
        <div className="dropdown-menu" onClick={toggleMenu}>
          <RxHamburgerMenu />
        </div>
        <div className={`section-links-container ${isMenuOpen ? "open" : ""}`}>
          <ul className="section-links">
            <li>
              <a href="#home" className={activeSection === "home" ? "active" : ""}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={activeSection === "about" ? "active" : ""}>
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className={activeSection === "portfolio" ? "active" : ""}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}