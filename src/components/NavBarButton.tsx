import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'

function NavBarButton() {

  const dispatch = useDispatch();
 
  const handleClick = (event: React.MouseEvent<Element>) => {
    const element = event.currentTarget;
    element.classList.contains('toggle') ? element.classList.remove('toggle') : element.classList.add('toggle')
    dispatch({ type: 'TOGGLE' });
  }

  return (
    <NavBarButtonContainer>
      <ButtonContainer>
        <Button>Work Trip</Button>
        <Button>Price</Button>
        <Button>Work Trip</Button>
        <Button>Price</Button>
        <Button>Work Trip</Button>
        <Button>Price</Button>
      </ButtonContainer>
      <ToggleContainer>
      <span style={{margin:'0 10px'}}>Show Map</span>
        <div className="toggle-btn" onClick={handleClick}>
          <div className="inner-circle"></div>
        </div>
      </ToggleContainer>
    </NavBarButtonContainer>
  )
}

export default NavBarButton

const NavBarButtonContainer = styled.div`
display:flex;
`
const ButtonContainer = styled.div`
display:flex;
`
const ToggleContainer = styled.div`
display:flex;
align-items:center;
margin-left:auto;
.toggle-btn{
  margin-left:auto;
  margin-right:50px;
  background-color:#08aadb;
  width:70px;
  height:30px;
  border-radius:30px;
  padding:5px;
}
.inner-circle{
  width:30px;
  height:30px;
  background:#fff;
  border-radius:50%;
  transition:all 300ms ease-in-out;
}
.toggle-btn.toggle{
  background-color:grey;
}
.toggle-btn.toggle > .inner-circle{
  margin-left:40px;
  transition:all 300ms ease-in-out;
}
`
const Button = styled.button`
border:1px solid rgba(0,0,0,0.3);
border-radius:5px;
background:white;
padding:0.5rem 0.8rem;
margin:10px;
cursor: pointer;
outline:none;
color:rgba(0,0,0,0.6);
:hover{
  color:#08aadb;
  box-shadow: 0 0 5px #08aadb;
}
:focus{
  outline:none;
}
min-width:70px;
`