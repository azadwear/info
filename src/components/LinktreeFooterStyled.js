import styled from "styled-components";

export const FooterSection = styled.div`

width: 80%;
padding-top: 30px;
padding-right: 5px;
padding-bottom: 20px;
align-items: center;
margin: 10px;
border-top: 1px solid #eaecf0;
hr{
    
    height: 0.5px;
    width: 96.7%;
    margin-left: 2rem;
    background: #d0d5dd;
    
}
.footer{
/* border: 1px solid red; */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
border-radius: 5px;



@media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    margin: 0.5;
}
}
.zuri-logo{
    margin-left: 1.8rem;

}

.footer-text{
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 24px;

text-align: center;

    color: #000000;
}

.icon-globe{
   margin-right: .2rem;
}

`