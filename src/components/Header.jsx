import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

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
      <nav >
        <div className="pages">
          <a className={activeSection === "home" ? "active" : ""} href="">Home</a>
          <a className={activeSection === "about" ? "active" : ""} href="#about">About</a>
          <a className={activeSection === "portfolio" ? "active" : ""} href="#portfolio">Portfolio</a>
          <a className={activeSection === "contact" ? "active" : ""} href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}