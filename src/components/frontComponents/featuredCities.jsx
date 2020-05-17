import React from 'react';
import CityPicture from './../../helpers/cityList';
import './featuredCitites.styles.scss';
import City from './city';


function FeaturedCities() {

  return (
    <div className="featured-city-box">
      <h1>Featured Cities</h1>
      <p>Discover thousands of apartments and homes for rent in 50+ countries</p>
      <div className="featured-city">
        {CityPicture.map((city, index) => <City
          
          key={index}
          className="display-city"
          name={city.name}
          img={city.img} />)
        }
      </div>

    </div>
  )
}


export default FeaturedCities;