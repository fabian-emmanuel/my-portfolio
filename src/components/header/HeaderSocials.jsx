import {BsFacebook, BsGithub, BsLinkedin} from "react-icons/bs"

const HeaderSocials = () => {
  return (<div className="header__socials">
       <a href="linkedIn.com" target="_blank"><BsLinkedin/></a>
       <a href="github.com" target="_blank"><BsGithub/></a>
       <a href="facebook.com" target="_blank"><BsFacebook/></a>
     </div>)
}

export default HeaderSocials;
