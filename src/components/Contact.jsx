import { Links } from "./Links"
import { useState } from "react"

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })  
  }

  const sendMessage = (e) => {
    e.preventDefault()
    emailjs
      .send('contact-service', 'contact-form', formData, 'LCcs_rlnFf8NFp7M4')
      .then((result) => {
        console.log("SUCCESS", result.text)
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" }) // clear form
      })
      .catch((error) => {
        console.log("ERROR", error.text) 
        alert("Message failed to send. Please try again.")
      })
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h1>Contact Me</h1>
          <p>
            I am interested in projects of any size, especially ambitious ones, so please feel free to reach out with any questions or requests using the form or connect with me on social media with the links below. Don’t hesitate to contact me!
          </p>
          <Links/>
        </div>
        <div className="contact-form">
          <form onSubmit={sendMessage}>
            <ul>
              <li className="form-row">
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required/>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required/>
              </li>
              <li>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required/>
              </li>
              <li>
                <textarea name="message" id="message" value={formData.message} onChange={handleChange} placeholder="Message" required></textarea> 
              </li>
              <li className="button-container">
                <button type="submit">
                  Send Message
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  )
}