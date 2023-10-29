import React from 'react'
import '../css/common.css'
import logo from "../css/images/zerone_networks.jpg"
import zeroneLogo from '../css/images/zerone_logo.png'

function FooterComponent() {
  const handleRedirect = (page) => {
    if(page === 'codespice'){
        window.open('https://www.codespice.co.in', '_blank')
    }
};
  return (
    <footer className='footer container-fluid row justify-content-evenly'>
      <div className='footer-company col-md-1 col-4'>
        <img className='footer-logo img-fluid' src={zeroneLogo}></img>
      </div>
      <p className='footer-description col-md-3 col-8'>Leading Fiber broadband provider serving over a decade from Perambalur reaching through out Tamilnadu. Experience high speed internet at a reasonable price.</p>
      <div className='footer-address col-md-3 col-12'>
        <b>Step in at:</b><br/>
        Trichy Main Road,
        Venkateshapuram, <br/>
        Sungu Pettai,
        Perambalur,<br/>
        Tamil Nadu - 621212,<br/>
        India
      </div>
      <div className='footer-contact col-md-2 col-12'>
        <b>Dial us:</b><br/>
        <div className='footer-phone'>Phone: (+91) 93 6060 6030</div>
        <div className='footer-email'>Email : support@zcomm.com</div>
      </div>
      <div className='footer-dev col-12'>
        Zerone networks private limited | site powered by 
        <a className='codespice' onClick={()=>handleRedirect('codespice')}> codespice</a>
      </div>
    </footer>
  )
}

export default FooterComponent
