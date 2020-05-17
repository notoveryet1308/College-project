import React from 'react';
import './style.scss';
import { withRouter } from 'react-router-dom';


function index({price, bed_room, area, bathroom, main_img, history, match, city, id, indexID}) {
  return (
    <div className='house-preview-container' onClick={() => history.push(`/rent/${city.toLowerCase()}/${id}/${indexID}`)} >
      <div className="image-info">
        <img src={main_img} alt="House-preview" />
        <p className="price-tag">{price} INR</p>
        <div className='house-des'>
          <div className='info  bedroom-info'>
            <i className=" icon fas fa-bed"></i>
            <p> &nbsp;{bed_room} Bed</p>
          </div>
          <div className='info  bathroom-info'>
            <i className="icon fas fa-bath"></i>
            <p> &nbsp;{bathroom} Bath</p>
          </div>
          <div className='info  area-info'>
            <div className='square-rotate' >
              <i className="icon far fa-square"></i>
            </div>
            <p>{area} sq foot</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(index);
