import React from 'react';
import './Amenity.styles.scss';

// import { DATA } from '../../../helpers/RentAvailableData';


function Amenity({amenities}) {
  
  return (
    <div className='amenity-container'>
      <div className='amenity-content'>
        <h1 className='amenity-heading'>
          Amenities
                </h1>
        <div className="amenities-box">
          {amenities.map(amenity => <div className="amenity">
            <img className='amenity-icon' src={amenity.svg} alt='elevator' />
            <p className='amenity-text'>
              {amenity.text.toUpperCase()}
            </p>
          </div>)}
          {/* <div className="amenity">
                        <img className='amenity-icon' src={ac} alt='ac' />
                        <p className='amenity-text'>
                            Air conditioner
                        </p>
                    </div>
                    <div className="amenity">
                        <img className='amenity-icon' src={floor} alt='floor' />
                        <p className='amenity-text'>
                            Hardwood floor
                        </p>
                    </div>
                    <div className="amenity">
                        <img className='amenity-icon' src={dishwasher} alt='dishwasher' />
                        <p className='amenity-text'>
                            Dish-Washer
                        </p>
                    </div>
                    <div className="amenity">
                        <img className='amenity-icon' src={parking} alt='parking' />
                        <p className='amenity-text'>
                            Parking
                        </p>
                    </div>
                    <div className="amenity">
                        <img className='amenity-icon' src={doorman} alt='doorman' />
                        <p className='amenity-text'>
                            Doorman
                        </p>
                    </div>
                    <div className="amenity">
                        <img className='amenity-icon' src={view} alt='view' />
                        <p className='amenity-text'>
                            View
                        </p>
                    </div>
                    <div className="amenity">
                        <img className='amenity-icon' src={storage} alt='storage' />
                        <p className='amenity-text'>
                            Storage
                        </p>
                    </div> */}
        </div>
      </div>
    </div>
  )
}

export default Amenity
