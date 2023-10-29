import React from 'react';
import '../css/common.css'

function PricingPage() {
    return (
        <div id='pricingPage' className='pricing-page-section'>
            <div className="box">
                 <div className="header-row">
                    <div className='cols'>Net Speed</div>
                    <div className='cols'>Plan Name</div>
                    <div className='cols'>Quarterly</div>
                    <div className='cols'>Half-yearly</div>
                 </div>
                <div className="my-row">
                    <div className='cols netspeed'>50 Mbps</div>
                    <div className='cols'>499</div>
                    <div className='cols'>1,497</div>
                    <div className='cols'>2,994</div>
                </div>
                <div className="my-row">
                <div className='cols netspeed'>60 Mbps</div>
                    <div className='cols'>599</div>
                    <div className='cols'>1,797</div>
                    <div className='cols'>3,594</div>
                </div>
                <div className="my-row">
                <div className='cols netspeed'>100 Mbps</div>
                    <div className='cols'>699</div>
                    <div className='cols'>2,097</div>
                    <div className='cols'>4,194</div>
                </div>
                <div className="my-row">
                <div className='cols netspeed'>150 Mbps</div>
                    <div className='cols'>799</div>
                    <div className='cols'>2,397</div>
                    <div className='cols'>4,794</div>
                </div>
                <div className="my-row">
                     <div className='cols netspeed'>200 Mbps</div>
                    <div className='cols'>999</div>
                    <div className='cols'>2,887</div>
                    <div className='cols'>5,994</div>
                </div>
                <div className="my-row">
                    <div className='cols netspeed'>250 Mbps</div>
                     <div className='cols'>1,499</div>
                    <div className='cols'>4,497</div>
                    <div className='cols'>8,994</div>
                </div>
                <div className="my-row">
                    <div className='cols netspeed'>300 Mbps</div>   
                    <div className='cols'>1,999</div>
                    <div className='cols'>5,997</div>
                    <div className='cols'>11,994</div>
                </div>
            </div>
            <p className='additional-charge justify-content-end'>*Additional GST applicable on Billing</p>
        </div>
    );
}

export default PricingPage;