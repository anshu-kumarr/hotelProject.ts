import React, {useEffect} from 'react';
import './style.css'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import HotelList from './components/HotelList'
import Map from './components/Map'
import Navbar from './components/Navbar'
import NavBarButton from './components/NavBarButton'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.all([axios.get('https://reqres.in/api/users?page=1'), axios.get('https://reqres.in/api/users?page=1')]).then(response => {
      const response1 = response[0].data.data
      const response2 = response[1].data.data
      const data = [...response1,...response2]
      dispatch({type:'INITIALIZE',payload:data})
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      <Navbar />
      <hr style={{ margin: 0 }}/>
      <NavBarButton />
      <hr style={{ margin: 0 }} />
      <MainContainer>
        <HotelList />
        <Map/>
      </MainContainer>
    </>
  );
}



const MainContainer = styled.div`
display:flex;
`
export default App;
