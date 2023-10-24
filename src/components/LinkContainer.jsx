import React from 'react'
import { Button, LinkWrapper} from './LinkContainerStyled';

function LinkContainer(props) {
  return (
    <a href={props.href} class={props.linkClass}>
    <LinkWrapper title={props.title}> 
      

   
        {/* <div > */}
            <i class={props.icon}></i>
        {/* </div> */}
        <Button id ={props.id} >{props.text} </Button>
      
    </LinkWrapper>
    </a>
   
  )
}

export default LinkContainer;