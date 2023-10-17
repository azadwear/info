import styled from "styled-components";

export const LinkWrapper = styled.div`

width: 100%;
margin: 25px 0px;
position: relative;

&:hover{
    .tooltip{
        visibility: visible;
        
    }
}

display: flex;
justify-content: center;
align-items: center;
padding: 24px 12px !important;
gap: 8px;
width: 100%;
height: 76px;
background: #EAECF0;
border: 1px solid #EAECF0;
border-radius: 8px;

&:hover{
    background: #d0d5dd;
}

`
export const Button = styled.a`
align-self: center;
text-decoration: none;
justify-content: center;
font-weight: 600;
cursor: pointer;
color: #101828;

&:active{
    color: #101828;
}

&:visited{
    color: #101828;
}
&:link{
    color: #101828;
}

`
export const ToolTip = styled.p`
width: 100%;
background: rgba(105, 105, 105, 1);
padding: 2px;
text-align: center;
visibility: hidden;
margin-top: -5px;
z-index: 1;
color: white;
font-size: 1.2rem;
font-weight: 600;
@media screen and (max-width: 768px){
   // margin-bottom: auto ;
   
}
`
