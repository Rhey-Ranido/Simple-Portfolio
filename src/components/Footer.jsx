// imported icons
import {  FaInstagram , FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";


export default function Footer() {

const iconSize = "30px"

  return (
    <footer>
      <div className="icon">
        <FaTwitterSquare className="icon" size={iconSize}/>
        <FaSquareFacebook className="icon" size={iconSize}/>
        <FaInstagram className="icon" size={iconSize}/>
        <FaLinkedin  className="icon" size={iconSize}/>
      </div>
      <p>Rhey ©2024 All rights reserved</p>
    </footer>
  )
}
