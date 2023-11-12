import React from 'react';
import Spline from '@splinetool/react-spline';
import '../css/common.css'
import zeroneLogo from '../css/images/zerone_networks.jpg'
import loginIcon from '../css/images/user_login.png'
import { useContext } from 'react';
import { DeviceContext } from '../App';

function LandingPage(props) {

    const deviceName = useContext(DeviceContext);

    const handleRedirect = (page) => {
        if(page === 'userLogin'){
            window.open('http://user.zcomm.co.in/selfcare', '_blank')
        }
        else{
            const section = document.getElementById(page);
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='landing-section'>
            <div className='header-buttons container-fluid row justify-content-between'>
                <img className='header-logo col-4 col-md-2 img-fluid' src={zeroneLogo} alt='ZERONE' />
                
                {
                    (deviceName === "tab" || deviceName === "laptop") &&  <div className='header-btns col-md-4 row justify-content-end'>    
                        <button className='enquire-button col-md-4' onClick={()=>handleRedirect("enquirePage")} >ENQUIRE</button>
                        <button className='pricing-button col-md-4' onClick={()=>handleRedirect("pricingPage")} >PRICING</button>
                        <div className='login-comp col-md-2'>
                            <img className='login-button img-fluid' onClick={()=>handleRedirect("userLogin")} src={loginIcon} alt='Login' />
                            <span className="tooltiptext">Login</span>  
                        </div>
                    </div>
                }
                {
                    (deviceName === "phone") && <img className='login-button col-2 img-fluid' onClick={()=>handleRedirect("userLogin")} src={loginIcon} alt='Login' />
                }
            </div>
            <div className='landing-page-parent container-fluid'>
                <div className='company-title row'>
                    <div className="content col-12">
                        <h2 className='company-name'>Zerone</h2>
                        <h2 style={{display: 'flex', flexDirection: 'row'}}>Zerone</h2>
                    </div>
                    {/* <div className='col-12 col-md-12 row justify-content-center'>
                        <div className='company-5g col-3'>5G</div>
                    </div> */}
                </div>
                <div className="spline-container row justify-content-start">
                    <Spline className='spline-obj col-10' scene="https://prod.spline.design/lSkQdxWBpp2eNXGc/scene.splinecode"/>
                </div>
                {
                    (deviceName === "phone") && <div className='header-buttons row justify-content-center'>
                        <button className='enquire-button col-5' onClick={()=>handleRedirect("enquirePage")} >ENQUIRE</button>
                        <button className='pricing-button col-5' onClick={()=>handleRedirect("pricingPage")} >PRICING</button>

                    </div>
                }
            </div>
        </div>
        
    );
}

export default LandingPage;
