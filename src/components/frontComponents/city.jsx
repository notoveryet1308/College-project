import React from 'react';
import './city.styles.scss';
import { withRouter } from 'react-router-dom';


function City({ history, name, img }) {

  let gradientColor = 'linear-gradient(315deg, #36096d77 0%, #37d6d66c 74%)';
  return (
    <div className='city-box' onClick={() => history.push(`rent/${name.toLowerCase()}`)}>
      <div className='city' style={{
        backgroundImage: `
                   ${gradientColor}, url(${img})`
      }}>

        <h3>{name}</h3>
        <p>See all the apartments</p>
      </div>
    </div>
  )

}

export default withRouter(City);

