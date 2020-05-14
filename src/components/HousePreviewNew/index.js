import React from 'react';
import './style.scss';
import pic from '../../images/houses/Delhi_Houses/house-7.jpg';

function index() {
  return (
    <div className='house-preview-container'>
      <div className="image-info">
        <img src={pic} alt="House-preview" />
        <p className="price-tag">2000 INR</p>
        <div className='house-des'>
          <div className='info  bedroom-info'>
            <i className=" icon fas fa-bed"></i>
            <p> &nbsp;4 room</p>
          </div>
          <div className='info  bathroom-info'>
            <i className="icon fas fa-bath"></i>
            <p> &nbsp;3 room</p>
          </div>
          <div className='info  area-info'>
            <div className='square-rotate' >
              <i className="icon far fa-square"></i>
            </div>
            <p>100 sq foot</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index;
