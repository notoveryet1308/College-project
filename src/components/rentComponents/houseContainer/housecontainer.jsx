import React from 'react';
import './housecontainer.styles.scss';
import NewHouseCard from '../../HousePreviewNew';
import { DATA } from '../../../helpers/RentAvailableData';
import Filter from '../../filter';
import Mapbox from '../../mapbox/mapbox';
function Housecontainer(props) {
  let cityname = props.city.toLowerCase();
  const getCordinates = (data, cname) => {
    let cords = [];
    data[cname].map(d => cords.push([d.latitude, d.longitude]));
    return cords;
  }
  let coords = getCordinates(DATA, cityname);

  return (
    <div className='house-container'>
      <div className='house-box'>
        <Filter city={cityname} />
        <div className='houses'>
          {DATA[cityname].map((house, indexID) => <NewHouseCard key={house._id} {...house} {...props} className='housecard' city={cityname} id={house._id} indexID={indexID} />)}
        </div>
      </div>
      <div className="map-container">
        <Mapbox coords={coords} citycord={cityname} />
      </div>
    </div>
  )

}

export default Housecontainer;

