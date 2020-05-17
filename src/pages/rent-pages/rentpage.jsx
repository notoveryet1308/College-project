import React from 'react';
import './rentpage.style.scss';
import MainNavigation from '../../components/Navigation/navigation';
import Housecontainer from '../../components/rentComponents/houseContainer/housecontainer';
import { withRouter, useParams } from 'react-router-dom';
// import Footer from './../../components/footer/footer';

function Rentpage(props) {
  const { city } = useParams();
  return (
    <div className='rentpage'>
      <MainNavigation {...props} rentpage={true} className='rentpage-nv' />

      <Housecontainer {...props} city={city} />
      {/* <Footer/> */}
    </div>
  )

}

export default withRouter(Rentpage);