import "./experience.css";
import {BsFillPatchCheckFill} from "react-icons/bs";
import {experience_data} from "./experience_data";


const Experience = () => {
  return(
     <section id="experiences">
       <h5>What Skills I Have</h5>
       <h2>My Experience</h2>
       <div className="container experience__container">

         {
           experience_data.map((item) => (
               <div key={item.id} className="experience__uiux">
                 <h3>{item.title}</h3>
                 <div className="experience__content">
                   {
                     item.desc.map((val, index) => (
                         <article key={index} className="experience__details">
                           <BsFillPatchCheckFill className="experience__details-icon"/>
                           <div>
                             <h4>{val.option}</h4>
                             <small>{val.level}</small>
                           </div>
                         </article>
                     ))
                   }
                 </div>
               </div>
           ))
         }
       </div>
     </section>
  )
}

export default Experience;
