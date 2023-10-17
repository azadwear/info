import styled from "styled-components";

export const Profile = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;



.share-icon-mobile{
    padding: 0.5rem 1rem;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border-style: dashed ;
    border-color: #d0d5dd;
    position: relative;
    margin-left: 10px;
    display: none;

}

@media screen and (max-width: 768px){
  
    .share-icon{
        display: none;
    }
    
    .share-icon-mobile{
        display: block;
       
    }
}

`
export const ImageContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:5px;
    position: relative;
    //cursor: pointer;
    

    .justify-content-center
    {
        justify-content: center !important;
        display: flex !important;
    }
   

    .fa-camera{
        color: white;
    }

    .icon {
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    
  
    }

    @media screen and (max-width: 768px){
        
    }
    

`


export const ImageWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:5px;
    width: 100%;
    position: relative;
    cursor: pointer;    

    .overlay{
       
        position: absolute;
        top: 7px;
        bottom: 0;
        left: 43px;
        right: 0;
        height: 85%;
        width: 50%;
        opacity: 0;
        transition: .3s ease;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 100%;
       // background-color: transparent;


    }

    .image{    
        width: 88px;
        align-self: center;
        border-radius: 50%;  
        cursor: pointer;
       
    }

    /* .image::before{
    background-color: rgba(38,38,38,.8);
    background-image: url("../assets/images/camera-01.png");
    background-position: 50% 82%;
    background-repeat: no-repeat;
    border-radius: 100%;
    content: "";
    cursor: pointer;
    height: 98%;
    position: absolute;
    -webkit-transform: scale(0);
    transform: scale(0);
    transition: .5s ease-in-out;
    width: 100%;

    }

    .image:hover:before {
    -webkit-transform: scale(1);
    transform: scale(1);
    transition: .5s ease-in-out;
} */

    // new style properties
     &:hover .overlay{
        transform: scale(1.05);
        opacity: 1;

    } 

`


export const ShareButton = styled.button`
    
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border-style: dashed;
    border-color: #d0d5dd;
    position: absolute;
    background-color: transparent;
    top: 2rem;
    right: 25%;
    .share-img{
       position: absolute;
       top: 7px;
       right: 7px;
       width: 20px;
    }
    .share-tooltip{
        //border: 1px solid red;
        position: absolute;
        right: 45px;
        top: 10px;
        visibility: hidden;
        width: 80px;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 2px 0;
        border-radius: 6px;
        z-index: 1;


    }

    .share-tooltip::after{
        content: " ";
        position: absolute;
        top: 50%;
        left: 100%; 
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent transparent black;

    }

    &:hover .share-tooltip{
        visibility: visible;
    }

    @media screen and (max-width: 768px){
 
        display: none;

    }
`