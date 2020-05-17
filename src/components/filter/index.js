import React, { useState } from 'react';
import './style.scss';

function Index() {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!isOpen);
  }
  return (
    <div className="filter-component">
      <div className="filter-box " onClick={handleOpen}>
        <div className="filter-icon">
          <i className="fas fa-filter"></i>
          <p className="curr-city">New Delhi, Delhi India</p>
        </div>
        <div className="caret-icon">
          <i className="fas fa-caret-down"></i>
        </div>
      </div>
      {isOpen && <div className={`filter-bottom ${isOpen ? 'filter-open': 'filter-close'}`} >

      </div>}
    </div>
  )
}

export default Index;
