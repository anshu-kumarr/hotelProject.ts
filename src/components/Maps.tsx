import React from 'react'
import styled from 'styled-components'
import { RootStateOrAny, useSelector } from 'react-redux'
import {Map,GoogleApiWrapper,Marker} from 'google-maps-react';


const style = {
  width: '50%',
  height: '100%'
}



function Maps(props: any) {
  const state = useSelector((state: RootStateOrAny) => state.showMap)
  const mapObj = {
    google : props.google,
    style:style,
    initialCenter: props.google.maps.LatLng(),
    zoom: 15,
  }
  return (
    <MapDisplay toggle={state}>
         <Map
        {...mapObj}>
      </Map>
    </MapDisplay>
  )
}

export default GoogleApiWrapper({
  apiKey: ''
})(Maps)
  
const MapDisplay = styled.div<{ toggle: Boolean }> `
width:${((props) => props.toggle ? '50%' :'0' )};
`
