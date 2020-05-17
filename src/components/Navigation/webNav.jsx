import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/mstile-144x144.png';
import './webNav.styles.scss';

class WebNav extends Component {

  render() {
    const { rentpage, style_diff } = this.props;


    const diff_style = rentpage || style_diff ? 'diff_style' : null;

    return (
      <div className={`web-nav ${diff_style}`}>
        <header className="web-nav-header">
          <div className="left-side">
            <div className="logo-box">
              <Link to='/'>
                <img style={{ height: "30px" }} src={logo} alt={logo} />
              </Link>
              <Link to='/' className='main-title'>Renteasy</Link>
            </div>
            <div className={`main-rent-buy-link`}>
              <Link activeclassname='active-link' className="link-rent" to="/rent/delhi">Rent</Link>
              <Link activeclassname='active-link' className="link-buy" to="/buy">Buy</Link>
            </div>
          </div>
          <div className="right-side">
            <div className="list-property-box">
              <Link className="add-p-link" to="/add-a-property">List a Property</Link>
            </div>
            <div className="login-signup">
              <div className="login-box">
                <Link activeclassname='active-link' className='l-s-link' to="/login">Log In</Link>
              </div>
              <div className="divider">

              </div>
              <div className="signup-box">
                <Link activeclassname='active-link' className='l-s-link' to="/signup">Sign Up</Link>
              </div>
            </div>
          </div>
        </header>

      </div>
    )
  }
}

export default WebNav; 