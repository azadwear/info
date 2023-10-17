import React from 'react';
import { MainSection, SectionBody, Content, ContactForm } from './components/ContactUsStyled';
import Footer from './components/LinktreeFooter';

function ContactUs() {
  return (
    <MainSection>
        
        <SectionBody>
          
           <Content>
            
            <ContactForm>
                <div className="heading">
                    <div className="heading-text">Contact Me</div>
                    <div className="heading-paragraph">Hi there, contact me to ask me about anything you have in mind.</div>

                </div>

                <div className="form">
                    <div className="form-name-container">
                        <div className="form-input-box">
                            <label htmlFor="fname" className='form-label'>First name</label>
                            <input id = "first_name" type="text" className='fname' placeholder='Enter your first name' />
                        </div>
                        <div className="form-input-box">
                            <label htmlFor="fname" className='form-label'>Last name</label>
                            <input id=' last_name' type="text" className='fname' placeholder='Enter your last name' />
                        </div>
                        

                        
                    </div>

                    <div className="form-email">
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="text" id = "email" className='email' placeholder='yourname@email.com'/>
                    </div>
                    
                    <div className="message-box">
                        <label htmlFor="">Message</label>
                        <textarea name="" id="message" cols="30" rows="10" className='form-message' placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                    </div>

                    <div className="permission">
                        <input type="checkbox"  className='check-permission'/>
                        <p className="permission-text">You agree to providing your data to {} who may contact you.</p>
                    </div>

                </div>
                <button className='submit-btn' id='btn__submit'>Send message</button>
            </ContactForm>
           </Content>
        </SectionBody>
        <Footer></Footer>
    </MainSection>
  )
}

export default ContactUs