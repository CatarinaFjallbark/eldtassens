import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () =>
  <div className='Footer'>
    <div>
      <p className='FooterLink'>
        <a href='https://www.skk.se/sv/hundraser/finsk-lapphund/'>
          <FontAwesomeIcon icon={['fas', 'info']} className='FooterIcon'/>
          <span id="footer-text">Rasen</span>
        </a>
      </p>
    </div>
    <div>
      <p className='FooterLink'>
        <a href='https://www.google.com/maps/place/Arl%C3%B6v/@55.639836,13.0654059,14z/data=!3m1!4b1!4m5!3m4!1s0x4653a2ff4de803d1:0x273a3ed64ffb047e!8m2!3d55.6402145!4d13.0886413?hl=sv/'>
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} className='FooterIcon'/>
          <span id="footer-text">Arlöv</span>
        </a>
      </p>
    </div>
    <div>
      <p className='FooterLink'>
        <a href='https://instagram.com/eldtassens'>
          <FontAwesomeIcon icon={['fab', 'instagram']} className='FooterIcon'/>
          <span id="footer-text">Instagram</span>
        </a>
      </p>
    </div>
    <div>
      <p className='FooterLink'>
        <a href='mailto:eldtassens@gmail.com'>
          <FontAwesomeIcon icon={['fas', 'envelope']} className='FooterIcon'/>
          <span id="footer-text">eldtassens@gmail.com</span>
        </a>
      </p>
    </div>
  </div>

export default Footer;