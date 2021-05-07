import React, { ReactElement } from 'react'
import styled from 'styled-components'
import {Map,GoogleApiWrapper} from 'google-maps-react';


const style = {
  width: '100%',
  height: '100%'
}

function InfoMap(props: any): ReactElement {
  const mapObj = {
    google : props.google,
    style:style,
    initialCenter: props.google.maps.LatLng(),
    zoom: 15,
  }
  return (
    <InfoMapContainer>
      
         <Map
          {...mapObj}>
      </Map>
    </InfoMapContainer>
  )
}

export default GoogleApiWrapper({
  apiKey: ''
})(InfoMap)

const InfoMapContainer = styled.div`
width:75%;
`