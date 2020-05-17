import React, { useEffect, useState } from 'react';
import './main_house_box.styles.scss';
import { Real_House_Data } from './../../helpers/demoHouseData';
import { useParams } from 'react-router-dom';
import { DATA } from '../../helpers/RentAvailableData';
import Housetype from './housetype';
import Address from './address';
import MiniDes from './mini_des';
import Applycard from './applycard';
import Gallery from './gallery';
import ScheduleTour from './scheduletour';
import Fulldes from './abouthouse/fulldes';
import Footer from './../footer/footer';
import Amenity from './abouthouse/Amenity';
import ContactInfo from './abouthouse/ContactInfo';

function MainHouseBox() {
  const [scrolled, setScroll] = useState(false);
  // constructor(props) {
  //   super(props);
  //   this.state = { scrolled: false }
  // }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY >= 700;
      console.log(window.scrollY);
      console.log(isTop)
      if (isTop) {
        setScroll(true)
      } else {
        setScroll(false)
      }


    })
  },[])

  const position_ = scrolled ? 'fixed' : 'absolute';
  let { indexID, city } = useParams();
  const cityname = city.toLowerCase();
  const linear_grad = `linear-gradient(315deg, #292b2cb4 0%, #22272eb7 74%)`;
  const data = DATA[cityname][indexID];
  const data2 = Real_House_Data[indexID];
  return (
    <div className='main-house'>
      <div className='main-house-box' style={{ backgroundImage: `${linear_grad} ,url(${data.main_img})` }}>
        <div className='main-house-sec address-housetype'>
          <Housetype />
          <Address location={data.address} />
        </div>
        <div className='main-house-sec general-info'>
          <MiniDes {...data} />
          <Applycard price={data.price} />
        </div>

      </div>
      <Gallery small_img={data2.small_img} />
      <div className='sticky-schedule' >
        <div className='sticky-box' style={{ position: `${position_}` }}>
          <ScheduleTour />
        </div>
      </div>
      <Fulldes />
      <Amenity amenities={data.amenities} />
      <ContactInfo />
      <Footer />
    </div>
  )
}
export default MainHouseBox;

