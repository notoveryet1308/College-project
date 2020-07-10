
import React, { useState } from 'react';
import ReactMapGL, { Marker} from 'react-map-gl';
import './mapbox.styles.scss';

const REACT_APP_MAPBOX_TOKEN = 'pk.eyJ1Ijoibm90b3ZlcnlldDEzMDgiLCJhIjoiY2s1bnZqcHg5MGN4NDNubW9neXQ0b3FrdiJ9.Z-1zjXKrlIsFQ1PjgpnCHA';

const coodinates = {
  delhi:[28.633649, 77.0935648],
  agra:[27.1786748,77.9714333]

}

function Mapbox({coords, citycord}) {
    const city = coodinates[citycord]
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100vh",
        latitude: city[0],
        longitude: city[1],
        center :[city[0], city[1]],
        zoom: 13,

    });
    return (

        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
            mapStyle='mapbox://styles/notoveryet1308/ck5nvchju10dn1inv169q64ae'
            onViewportChange={viewport => {
                setViewport(viewport)
            }}
            className='mapbox'
        >
            {coords.map(cor => <Marker latitude={cor[0]} longitude={cor[1]}>
                <div className='marker-icon'>
                    <i className="icon fas fa-map-marker-alt"></i>
                </div>
                
            </Marker>)}
        </ReactMapGL>
    )
}





export default Mapbox;


