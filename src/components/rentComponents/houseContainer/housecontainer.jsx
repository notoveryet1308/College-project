import React from 'react';
import './housecontainer.styles.scss';
// import HouseCard from '../houseCard/house';
// import { DemoHouse } from './../../../helpers/demoHouseData';
import NewHouseCard from '../../HousePreviewNew';
import { DATA } from '../../../helpers/RentAvailableData';
import Filter from '../../filter';
function Housecontainer(props) {
 let cityname = props.city.toLowerCase();
 console.log(`cityname: ${cityname} > ${typeof cityname} `)
  return (
    <div className='house-container'>

      <div className='house-box'>
        <Filter />
        <div className='houses'>
          {DATA[cityname].map((house, indexID) => <NewHouseCard key={house._id} {...house} {...props} className='housecard' city={cityname} id={house._id} indexID={indexID} />)}
        </div>
      </div>
    </div>
  )

}

export default Housecontainer;

