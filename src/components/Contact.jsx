export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form action="" className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required/>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required/>
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}