import "./header.css"
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
    return(
       <header>
         <div className="container header__container">
           <h5>Hello I'm</h5>
           <h1>Shelah Olomukoro</h1>
           <h5 className="text-light">UI-UX Designer</h5>
           <CTA/>
           <HeaderSocial/>

           <div className="me">
             <img src={ME} alt="me"/>
           </div>

           <a href={"#contact"} className="scroll__down">
             Scroll Down
           </a>


         </div>
       </header>
    )
};

export default Header;
