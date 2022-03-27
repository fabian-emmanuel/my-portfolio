import "./nav.css"
import {ImHome2} from "react-icons/im";
import {FaUserAlt} from "react-icons/fa";
import {RiBookmark3Fill, RiContactsBookFill, RiServiceFill} from "react-icons/ri";
import {useState} from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
     <nav>
       <a href={"#"} onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
         <ImHome2/>
       </a>
       <a href={"#about"} onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}>
         <FaUserAlt/>
       </a>
       <a href={"#experiences"} onClick={() => setActiveNav("#experiences")}
          className={activeNav === "#experiences" ? "active" : ""}>
         <RiBookmark3Fill/>
       </a>
       <a href={"#services"} onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}>
         <RiServiceFill/>
       </a>
       <a href={"#testimonials"} onClick={() => setActiveNav("#testimonials")}
          className={activeNav === "#testimonials" ? "active" : ""}>
         <RiContactsBookFill/>
       </a>
     </nav>
  )
};

export default Nav;
