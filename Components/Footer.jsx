import Image from "next/image";
import Logo from "../assets/Logo.png";
import css from '../styles/Footer.module.css'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer(){
    return(
        <div className={css.container}>
            <span>ALL RIGHT RESERVED</span>  
                <div className={css.social}>
                 <AiFillFacebook size={45}/>
                 <AiFillGithub size={45}/>
                 <AiFillInstagram size={45}/>
                </div> 
                <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Fudo</span>
      </div>
        </div>
    )
    };