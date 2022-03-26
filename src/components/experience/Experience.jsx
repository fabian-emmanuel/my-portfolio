import "./experience.css";
import {BsFillPatchCheckFill} from "react-icons/bs";


const Experience = () => {
  return(
     <section id="experiences">
       <h5>What Skills I Have</h5>
       <h2>My Experience</h2>
       <div className="container experience__container">

         <div className="experience__uiux">
           <h3>UI-UX Design</h3>
           <div className="experience__content">
             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>Figma</h4>
               <small>Experienced</small>
               </div>
             </article>

             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                 <h4>Figma</h4>
                 <small>Experienced</small>
               </div>
             </article>

             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                 <h4>Figma</h4>
                 <small>Experienced</small>
               </div>
             </article>

             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                 <h4>Figma</h4>
                 <small>Experienced</small>
               </div>
             </article>

             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                 <h4>Figma</h4>
                 <small>Experienced</small>
               </div>
             </article>
           </div>
         </div>

         <div className="experience__frontend">
           <h3>FrontEnd Development</h3>
           <div className="experience__content">
             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                 <h4>Figma</h4>
                 <small>Experienced</small>
               </div>
             </article>

             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                 <h4>Figma</h4>
                 <small>Experienced</small>
               </div>
             </article>

             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                 <h4>Figma</h4>
                 <small>Experienced</small>
               </div>
             </article>

             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                 <h4>Figma</h4>
                 <small>Experienced</small>
               </div>
             </article>

             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                 <h4>Figma</h4>
                 <small>Experienced</small>
               </div>
             </article>
           </div>
         </div>
       </div>
     </section>
  )
}

export default Experience;
