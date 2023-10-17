import React from 'react';
import { Profile, ShareButton, ImageContainer,  ImageWrapper, ShareButtonContainer } from './ProfileStyled';
import me from "../assets/images/Emmanuel-Olad.jpg"
import share from "../assets/images/Icon.svg"
import dots from "../assets/images/dots-horizontal.svg"
export default function ProfileSection (){
  return (
    <>
    <Profile>
        <ImageContainer>
          <ImageWrapper>
             <img src={me} alt="" id='profile__img' className='image'/>
             <div className="overlay">
                <a className='icon'>
                  <i class="fa fa-camera icon-camera" aria-hidden="true"></i>
                </a>  
              </div>
          </ImageWrapper>

          <div class="justify-content-center">
            <h2 id='twitter'>AZAD</h2>
          </div>
        </ImageContainer>
            
            {/* <ShareButton className='share-icon'>
            <span className='share-tooltip'>Share Link</span>
            <img className='share-img' src={share} alt=""/>
            </ShareButton> */}
        
        {/* <button className='share-icon-mobile'><img src={dots} alt="" /></button> */}
      
    </Profile> 
    </>
  )
}
