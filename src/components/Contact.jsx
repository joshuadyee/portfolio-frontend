import { Links } from "./Links"

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h1>Contact Me</h1>
          <p>
            I am interested in projects of any size, especially ambitious ones, so please feel free to reach out with any questions or requests using the form or connect with me on social media. Don’t hesitate to contact me!
          </p>
          <Links/>
        </div>
        <div className="contact-form">
          <form action="">
            <ul>
              <li className="form-row">
                <input type="text" id="name" name="name" placeholder="Name" required/>
                <input type="email" id="email" name="email" placeholder="Email" required/>
              </li>
              <li>
                <input type="text" id="subject" name="subject" placeholder="Subject" required/>
              </li>
              <li>
                <textarea name="message" id="message" placeholder="Message" required></textarea> 
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