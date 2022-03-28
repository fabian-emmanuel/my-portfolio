import "./about.css"
import ME from "../../assets/me-about.jpg"
import {about_data} from "./about_data";

const About = () => {
  return(
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me"/>
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
              {
                  about_data.map((item) => (
                 <article key={item.id} className="about__card">
                   <item.icon className="about__card-icon"/>
                   <h5>{item.title}</h5>
                   <small>{item.summary}</small>
                 </article>
                  ))
              }
           </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Massa eget egestas purus viverra accumsan in nisl nisi scelerisque.
            Massa eget egestas purus viverra accumsan in nisl nisi scelerisque.
          </p>

          <a href={"#contact"} className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
};

export default About;
