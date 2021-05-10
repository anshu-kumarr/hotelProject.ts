import React, { ReactElement, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import styled from "styled-components";

function InfoMap(props: any): ReactElement {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };
  const [selected, setSelected] = useState<any>({});

  const onSelect = (item: any) => {
    setSelected(item);
  };

  return (
    <InfoMapContainer>
      <LoadScript googleMapsApiKey=''>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          {
            <Marker
              title='Demo Marker'
              position={defaultCenter}
              onClick={() =>
                onSelect({
                  name: "The Capitol Apartments",
                  address:
                    "35 Peel St, South Brisbane, South Brisbane, 4101 Brisbane, Australia",
                })
              }
              clickable={true}
            />
          }
          {selected.name && (
            <InfoWindow
              position={defaultCenter}
              onCloseClick={() => setSelected({})}
            >
              <>
                <h2>{selected.name}</h2>
                <p>{selected.address}</p>
              </>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </InfoMapContainer>
  );
}

export default InfoMap;

const InfoMapContainer = styled.div`
  width: 75%;
`;
