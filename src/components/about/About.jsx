import "./about.css"
import ME from "../../assets/me-about.jpg"
import {FaAward, FaUsers} from "react-icons/fa";
import {VscFolderActive} from "react-icons/vsc";

const About = () => {
  return(
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
             <article className="about__card">
               <FaAward className="about__card-icon"/>
               <h5>Experience</h5>
               <small>7+ Years Working</small>
             </article>

             <article className="about__card">
               <FaUsers className="about__card-icon"/>
               <h5>Clients</h5>
               <small>200+ Worldwide</small>
             </article>

             <article className="about__card">
               <VscFolderActive className="about__card-icon"/>
               <h5>Projects</h5>
               <small>50+ Completed</small>
             </article>
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
