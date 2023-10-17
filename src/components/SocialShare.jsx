import React from 'react'
import styled from 'styled-components'
import slack from "../assets/images/slack.svg"
import github from "../assets/images/Social icon.svg"


function SocialShare() {
  return (
    <Social>
        <a href="callto:96179105374"><i class="bi bi-large bi-telephone-fill"></i></a>
        {/* <a href=""><img src={slack} alt="" /></a> */}
    </Social>
  )
}
const Social =  styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100px;
a{

    text-decoration: none;
    color: #101828;
    font-size: 20px;
    &:hover{

        color: #101828;
    }
}


.bi-large
  {
  font-size: 1.6rem;
  color: #101828;
  }
`
export default SocialShare