import React from 'react'
import {useSelector,useDispatch, RootStateOrAny} from 'react-redux'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components' 
import search from '../search'

export default function Navbar() {

  const dispatch = useDispatch();
  const state = useSelector((state: RootStateOrAny) => state.hotelList)

  function handleChange(e: any) {
    const filteredData = search(e.target.value, state);
    dispatch({type:'ADD_TO_DISPLAY',payload:filteredData})
  }
  return (
    <NavBarContainer>
      <NavBarIcon>
        <FontAwesome name="building" size="2x"/>
      </NavBarIcon>
      <NavBarInputBox>
        <NavBarInput onChange={handleChange} placeholder="Search"></NavBarInput>
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
margin-top:20px;
margin-bottom:5px;
display:flex;
justify-content:space-evenly;
`
const NavBarInput = styled.input`
width:100%;
padding:10px;
outline:none;
border:1px solid rgba(0,0,0,0.3);
:focus{
  outline:none;
  box-shadow: 0 0 5px #08aadb;
}
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