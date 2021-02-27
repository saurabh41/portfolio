import React from "react";
import {IconContext} from "react-icons";
import { FaGithub, FaLinkedinIn, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer=() => {
    return (
       
        <>
         <IconContext.Provider value={{color:"white" ,size:"2em"}}>
       <div className="containerf">
       <div class="row">
  <div className="column1">
    <h4>Interst</h4>
    <ul className="interst">
        <li>Watching Web series</li>
        <li>Playing Cricket</li>
        <li>Travelling</li>
        <li>Chilling with friends</li>
        <li>Mandala Art</li>
        <li>Cards</li>
    </ul>
  </div>
  <div className="column2">
    <h4>Social Media</h4>
    <FaGithub className="icons"/>
    <FaFacebook  className="icons"/>
    <FaInstagram  className="icons" />
    <FaYoutube  className="icons"/>
    < FaLinkedinIn className="icons"/>
  </div>
  <div className="column3">
    <h4>Column 3</h4>
    <ol>
        <p>community</p>
        <p>Documentation</p>
        <p>FAQ</p>
        <p>Service Status</p>
        <p>connect</p>
        <p>Blog</p>
        
    </ol>
  </div>
  <div className="column5">   
   
  </div>
  <div className="column4">   
  <p>Copyright © 2021 Saurabh</p>
    <ol>
        <li>Privacy Policy</li>
        <li>Cookies</li>
        <li>Legal</li>
        <li>Social Impact</li>
    </ol>
  </div>
  
  </div>
</div>
                
</IconContext.Provider>      
    </>
    );
}

export default Footer;
