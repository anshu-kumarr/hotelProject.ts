import React from 'react'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components' 

export default function Navbar() {
  return (
    <NavBarContainer>
      <NavBarIcon>
        <FontAwesome name="building" size="2x"/>
      </NavBarIcon>
      <NavBarInputBox>
        <NavBarInput placeholder="Search"></NavBarInput>
      <FontAwesome className="search" name="search" />
      </NavBarInputBox>
      <NavBarLink>
        <NavLink>Become a Host</NavLink>
        <NavLink>Register</NavLink>
        <NavLink>Login</NavLink>
        <NavLink>Help</NavLink>
      </NavBarLink>
    </NavBarContainer>
  )
}

const NavBarContainer = styled.div`
margin:30px;
display:flex;
justify-content:space-evenly;
`
const NavBarInput = styled.input`
width:100%;
padding:10px;
outline:none;
`
const NavBarIcon = styled.div`
display:flex;
align-items:center;
`
const NavBarInputBox = styled.div`
position:relative;
width:40%;
display:flex;
justify-content:center;
align-items:center;
.search{
font-size:1.5rem;
position:absolute;
padding:.5rem;;
right:0;
}
`
const NavBarLink = styled.div`
width:30%;
display:flex;
justify-content:space-evenly;
`
const NavLink = styled.p`
&:hover{
  cursor: pointer;
}
`