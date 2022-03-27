import "./contact.css"
import {sendForm} from "emailjs-com";
import {useRef} from "react";
import {contact_data} from "./contact_data";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    sendForm('service_eah61je', 'template_aih2jbt', form.current, 'lUSIXOcoRd33mdnQB');
    e.target.reset();
  }

  return (
     <section id="contact">
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>

       <div className="container container__contact">
         <div className="contact__options">
           {
             contact_data.map((item) => (
                <article key={item.id} className="contact__option">
                  <item.show className="contact__option-icon"/>
                  <h4>{item.name}</h4>
                  <h5>{item.title}</h5>
                  <a href={item.cta} target="_blank" rel="noreferrer">{item.tag}</a>
                </article>
             ))
           }
         </div>

         <form ref={form} onSubmit={sendEmail}>
           <input type={"text"} name={"name"} placeholder={"Full Name"} required/>
           <input type={"email"} name={"email"} placeholder={"Email Address"} required/>
           <input type={"text"} name={"subject"} placeholder={"Subject"} required/>
           <textarea name={"message"} rows={10} placeholder={"Message"} required/>
           <button type={"submit"} className={"btn btn-primary"}>Send Message</button>

         </form>
       </div>
     </section>
  )

}

export default Contact;

