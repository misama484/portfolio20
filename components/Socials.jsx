import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebook, FaMailBulk, FaInstagram } from "react-icons/fa";
import datos from "../datos.json"


const socials = [
  {icon: <FaGithub/>, path: datos.datos.about.github},
  {icon: <FaLinkedinIn/>, path: datos.datos.about.linkedin},
  {icon: <FaFacebook/>, path: datos.datos.about.facebook},
  {icon: <FaInstagram/>, path:""},
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank">{item.icon}</Link>
        )
      })}
    </div>
  )
}

export default Socials