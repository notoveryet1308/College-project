import React, { Component } from 'react';
import './applycard.styles.scss';

export default class Applycard extends Component {
 
    render() {
       const {price} = this.props;
        return (
            <div className='applycard'>
                <div className='applycard-box'>
                    <div className='box price'>
                        <span>Monthly price</span>
                    </div>
                    <div className='box price-digit'>
                        {/* <i class="fal fa-arrow-circle-down"></i> */}
                        <span >{price} INR</span>
                    </div>
                    <div className='box avalaible'>
                        <span>Avalaible:</span>
                        <span className='bold'>Right Now</span>
                    </div>
                    <div className='box apply'>
                        Apply
                    </div>
                </div>
            </div>
        )
    }
}
