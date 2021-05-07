import React, { useState, useRef, useEffect } from 'react'
import Information from './Information'
import Reviews from './Reviews'
import styled from 'styled-components'

interface Props {
  title:string
}

const InfoBox = (props: Props) => {

  useEffect(()=> setToggle({toggle:true,tar:start.current}),[])
  const start = useRef()
  const [state, setToggle] = useState({ toggle: true, tar: start.current })
  function handleClick(e: any) {
    setToggle((ps) => {
      if (ps.tar !== e.target) return { toggle: !ps.toggle, tar: e.target }
      else return {toggle:ps.toggle,tar:ps.tar}
    })
  }

  
  return (
    <InfoBoxContainer>
      <InfoImage src={'http://www.jjtravelonline.com/images/inner-services/hotel-inner.png'} />
      <InfoTitle>{props.title}</InfoTitle>
      <Hr />
      <InfoTab>
        <InfoButton ref={start} onClick={handleClick } toggle={state.toggle}>Info</InfoButton>
        <ReviewButton onClick={handleClick} toggle={state.toggle}>Reviews</ReviewButton>
      </InfoTab>
      <div style={{ overflow: 'scroll', height:'50vh'}}>
      {state.toggle ? <Information /> :<Reviews/> }
      </div>
        
    </InfoBoxContainer>
  )
}

export default InfoBox

const InfoBoxContainer = styled.div`
margin: 0 2px;
width:25%;
`
const InfoImage = styled.img`
height:200px;
object-fit:cover;
width:100%;
`
const InfoTitle = styled.div`
font-size:1.5rem;
font-weight:600;
text-align:center;
`
const Hr = styled.hr`
/* box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1); */
background:rgba(0,0,0,0.2);
`
const InfoTab = styled.div`
display:flex;
margin-bottom:10px;
`
const InfoButton = styled.div<{ toggle: Boolean, ref: any }>`
padding:3px;
align-items:center;
text-align:center;
width:50%;
${(({ toggle }) => toggle ? `border-bottom:#42adef 2px solid ;
 color:#42adef`:``)}
`
const ReviewButton = styled.div<{ toggle: Boolean }>`
padding:3px;
align-items:center;
text-align:center;
width:50%;
${(({toggle}) => toggle ?``: `border-bottom:#42adef 2px solid;color:#42adef`)}
`