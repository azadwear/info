import { Main, Section, } from "./LinktreeStyled";
import ProfileSection from "./Profile";
import LinkContainer from "./LinkContainer";
import SocialShare from "./SocialShare";
import Footer from "./LinktreeFooter";
import {Link, NavLink} from "react-router-dom"

import React from 'react'

function LinkTree() {

    const bookSubText = "This is where you find books about design and coding";
    const pythonBook = "This is where you get excellent books on python programming";
    const checkingCoder = "Are you a coder? We will verify your claim!";
    const designBooks = "Get the best books on designs here! All freely offered by Zuri."
    const contact = "Contact Me"
    const styles ={textDecoration:"none", active:"#101828", visited:"#101828", link:"#101828"}
    

  return (
    
      <Main>
        <Section>
          <ProfileSection/>

          <div className="links">
        
          <LinkContainer id = "btn__zuri" text="Instagram" href="https://instagram.com/azadwears" icon="bi bi-instagram"/>
          <LinkContainer id = "books" text="Facebook" href="https://facebook.com/azadwears" title={bookSubText} icon="bi bi-facebook"/>
          <LinkContainer id = "books" text="Twitter" href="https://twitter.com/azadwears" title={bookSubText} icon="bi bi-twitter"/>
          <LinkContainer id = "books" text="Shop" href="https://azadwear.com" title={bookSubText} icon="bi bi-cart"/>
          <LinkContainer id = "books" text="Whatsapp" href="https://wa.me/96179105374" title={bookSubText} icon="bi bi-whatsapp"/>
          {/* <LinkContainer id = "books" text="Call Us" href="callto:96179105374" title={bookSubText} icon="bi bi-phone"/> */}

          <Link to={"/linktree-react/contact"} style={{textDecoration:"none"}}>
          
          {/* <LinkContainer id = "contact" text="Contact Me" title ={contact} /> */}

          </Link>

          
          </div>
          
          <SocialShare/>
         
        </Section>
         
        <Footer />
      </Main>
    );
    
}

export default LinkTree