import React from 'react';
import './style.scss';

const cityname = {
  delhi: "New Delhi, Delhi India",
  agra:"Agra, UP India",
  chandigarh:"Chandigarh, India",
  amritsar:"Amristar, Punjab India",
  shimla:"Shimla, Himachal India",
  assam:"Assam, India",
  patna:"Patna, Bihar India",
  ladakh:"Ladakh, India",
  gurugram:"Gurugram, Haryana India"
}

function Index({city}) {

  return (
    <div className="filter-component">
      <div className="filter-box ">
        <div className="filter-icon">
          <p className="curr-city">{cityname[city]}</p>
        </div>
      </div>
    </div>
  )
}

export default Index;
