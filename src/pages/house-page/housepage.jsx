import React from 'react';
import './housepage.styles.scss';
import {useParams} from 'react-router-dom';
import MainNavigation from './../../components/Navigation/navigation';
import MainHouseBox from '../../components/main-house/main_house_box';
import MainHouseBoxMobile from '../../components/Mobile/MainHouseBoxMobile';

function Housepage() {

  
const {indexID} = useParams();

  return (
    <div className='housepage'>
      <MainNavigation style_diff={true} />
      <MainHouseBox className='Main-house-box' id={indexID} />
      <MainHouseBoxMobile id={indexID} />
    </div>
  )
}

export default Housepage;
