import React from 'react'
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
      <p style={{marginLeft:'500px'}}>Show Map</p>
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
width:50%;
`
const ToggleContainer = styled.div`
display:flex;
width:50%;
align-items:center;
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
border:1px solid grey;
border-radius:5px;
background:white;
padding:0.5rem 0.8rem;
margin:10px;
cursor: pointer;
`