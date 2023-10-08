import React from 'react';
import Spline from '@splinetool/react-spline';
import '../css/common.css'

function LandingPage(props) {

    return (
        <div>
            <div className='header-buttons'>
                <button className='enquire-button'>ENQUIRE</button>
                <button className='pricing-button'>PRICING</button>
            </div>
            <div className='landing-page-parent'>
            <div className='company-title'>
                <div className="content">
                    <h2>zerone</h2>
                    <h2>zerone</h2>
	            </div>
                <div className='company-slogan'></div>
                <div className='company-5g'></div>
            </div>
            <div className="spline-container">
                <Spline scene="https://prod.spline.design/lSkQdxWBpp2eNXGc/scene.splinecode" />
            </div>
        </div>
        </div>
        
    );
}

export default LandingPage;