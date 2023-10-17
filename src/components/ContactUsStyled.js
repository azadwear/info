import styled from "styled-components";

export const MainSection = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding: 64px 0px 96px;
gap: 64px;
width: 98.5vw; 

@media screen  and (max-width: 768px){
    width: auto;
}

`

export const Header = styled.div`
border: 1px solid red;

`

export const SectionBody = styled.div`

background: white;
align-items: center;
padding: 0px 32px;
gap: 64px;

 width: 75%; 
/* height: 800px; */

@media screen  and (max-width: 768px){
    flex-direction: column;
   width: auto;
}


`

export const Content = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;

width: 100%; 
height: 800px; 
@media screen  and (max-width: 768px){
   width: auto;
}


`

export const ContactForm = styled.section`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 48px;

width: 74%;

@media screen  and (max-width: 768px){
    width: auto;
}
.heading{
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 20px;

//width: 100%;
height: 94px;
@media screen  and (max-width: 768px){
    /* width: 50%; */
    //align-items: center;
}

}

.heading-text{

height: 44px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 44px;
color: #101828;
letter-spacing: -0.02em;

@media screen  and (max-width: 768px){
    width: auto;
    
}

}

.heading-paragraph{
height: 30px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: #475467;
@media screen  and (max-width: 768px){
   
    font-size: 18px;
}

}

.form{
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 32px;
width: 100%;
height: auto;


}

.form-name-container{

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 24px;
width: 100%;


@media screen  and (max-width: 768px){
     flex-direction: column; 
}

}

.form-input-box{
 display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 6px;

/* width: 348px;  */
width: 100%;
height: 70px;
@media screen  and (max-width: 768px){
    width: 100%;
}
}

.form-label{
 width: 71px;
height: 20px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;

color: #344054;

}

.fname{
padding: 10px 14px;
gap: 8px;
width: 100%;
height: 44px;
@media screen  and (max-width: 768px){
    width: 100%;
}
background: #FFFFFF;
border: 1px solid #D0D5DD;

box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
border-radius: 8px;


}

.form-email{

    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1px;
gap: 6px;

/* width: 720px; */
width: 100%;
height: 70px;
}

.label-email{

width: 36px;
height: 20px;
width: 100%;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;

}

.email{
padding: 10px 14px;
gap: 8px;

 width: 100%; 
height: 44px;
background: #FFFFFF;
border: 1px solid #D0D5DD;
box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
border-radius: 8px;


}

.message-box{
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1px;
gap: 6px;
width: 100%;
height: 158px;

}

.form-message{
   
    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 12px 14px;
gap: 8px;

width: 100%;
/* height: 132px; */
background: #FFFFFF;
border: 1px solid #D0D5DD;
box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
border-radius: 8px;
}

.permission{
    display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 12px;

width: 100%;
height: 24px;
}

.check-permission{
    width: 20px;
height: 20px;
background: #FFFFFF;
border: 1px solid #D0D5DD;
border-radius: 6px;
margin: 1px;
}

.permission-text{
    display: inline-block;
flex-direction: column;
align-items: flex-start;
padding: 1px;
gap: 2px;
height: 24px;
color: #475467;
font-size: 16px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;

@media screen  and (max-width: 768px){
    font-size: 12px;
}
}

.submit-btn{
    /* display: flex;
flex-direction: row;
justify-content: center;
align-items: center; */
padding: 12px 20px;
gap: 8px;
height: 48px;
background: #1570EF;
width: 100%;
margin: 2px;
color: #ffffff;
border: 1px solid #1570EF;
/* Shadow/xs */

box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
border-radius: 8px;
}
`