import React, { Component } from 'react';
import './mini_des.styles.scss';

class Mini_des extends Component {
    render() {
        const { bathroom,  area, mobileView } = this.props;
        return (
            <div className={`mini-des ${mobileView && 'mobile-view'}`}>
                {!mobileView && <div className='des-text'>
                    <p>CONEY ISLAND: OCEAN FRONT</p>
                </div>}
                <div className='des-other-info'>
                    <div className='des-info bath'>
                        <i className="fas fa-bath"></i>
                        <span>{bathroom}</span>
                        <span>Bath</span>
                    </div>
                    <div className='des-info area'>
                        <i className="rotate far fa-square"></i>
                        <span>{area}</span>
                        <span>sq foot</span>
                    </div>
                    { !mobileView && <div className='des-info cats'>
                        <i className="fas fa-cat"></i>
                        <span>Cats</span>
                        <span>2</span>
                    </div>}
                    {!mobileView && <div className='des-info dogs'>
                        <i className="fas fa-dog"></i>
                        <span>Dogs</span>
                        <span>2</span>
                    </div>}
                    <div className='des-info deposit'>
                        <i className="fas fa-money-check-alt"></i>
                        <span>2000 INR</span>
                        <span>Deposit</span>
                    </div>
                </div>

            </div>
        )
    }
}
export default Mini_des;