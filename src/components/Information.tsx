import React, { ReactElement } from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
interface Props {
  
}

function Information({}: Props): ReactElement {
  return (
    <InformationContainer>
      <div>
      <RoomInfo>
        <RoomInfoIcon><FontAwesome name="home" size="2x"/>  </RoomInfoIcon>
        <div>
        <RoomInfoTitle>Entire Apartment</RoomInfoTitle>
        <RoomInfoDesc>4 Guest 1 Bedroom 4 Guest 1 Bedroom</RoomInfoDesc>
        </div>
      </RoomInfo>
      <RoomInfo>
      <RoomInfoIcon><FontAwesome name="home" size="2x"/>  </RoomInfoIcon>
        <div>
        <RoomInfoTitle>Entire Apartment</RoomInfoTitle>
        <RoomInfoDesc>4 Guest 1 Bedroom 4 Guest 1 Bedroom</RoomInfoDesc>
        </div>
      </RoomInfo>
      <RoomInfo>
      <RoomInfoIcon><FontAwesome name="home" size="2x"/>  </RoomInfoIcon>
        <div>
        <RoomInfoTitle>Entire Apartment</RoomInfoTitle>
        <RoomInfoDesc>4 Guest 1 Bedroom 4 Guest 1 Bedroom</RoomInfoDesc>
        </div>
        </RoomInfo>
      </div>
      <hr />
     
      <Amenities>
      <div style={{ fontWeight:600,width:'100%',marginBottom:'5px'}}>Amenities</div>
        <div>Air Condition</div>
        <div>Air Condition</div>
        <div>Air Condition</div>
        <div>Air Condition</div>
      </Amenities>
    </InformationContainer>
  )
}

export default Information

const InformationContainer = styled.div`
color:gray;
`
const RoomInfo = styled.div`
display:flex;
padding:10px 20px;
`
const RoomInfoTitle = styled.div`
font-weight:600;
color:rgba(0,0,0,0.7);

`
const RoomInfoDesc = styled.div`
max-width:80%;
`
const RoomInfoIcon = styled.div`
margin:10px;
color:#42adef;
`
const Amenities = styled.div`
margin-top:10px;
display:flex;
flex-flow:wrap;
div{
  width:50%;
  text-align:center;
}
`