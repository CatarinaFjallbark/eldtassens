import React from 'react'
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LinkCard = () =>
  <div className='LinkCard'>
    <div id="first" className='PerspectiveLine'>
      <p className='PerspectiveText'>
      </p>
      <p className='PerspectiveText'>
        <a href='https://www.skk.se/sv/hundraser/finsk-lapphund/'>
          <FontAwesomeIcon icon={['fas', 'info']} className='LinkCardIcon'/>
          <span id="menu-text">Rasen</span>
        </a>
      </p>
    </div>
    <div className='PerspectiveLine'>
      <p className='PerspectiveText'>
        <a href='https://www.skk.se/sv/hundraser/finsk-lapphund/'>
          <FontAwesomeIcon icon={['fas', 'info']} className='LinkCardIcon'/>
          <span id="menu-text">Rasen</span>
        </a>
      </p>
      <p id="first" className='PerspectiveText'>
        <a href='https://www.google.com/maps/place/Arl%C3%B6v/@55.639836,13.0654059,14z/data=!3m1!4b1!4m5!3m4!1s0x4653a2ff4de803d1:0x273a3ed64ffb047e!8m2!3d55.6402145!4d13.0886413?hl=sv/'>
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} className='LinkCardIcon'/>
          <span id="menu-text">Hitta hit</span>
        </a>
      </p>
    </div>
    <div className='PerspectiveLine'>
      <p className='PerspectiveText'>
        <a href='https://www.google.com/maps/place/Arl%C3%B6v/@55.639836,13.0654059,14z/data=!3m1!4b1!4m5!3m4!1s0x4653a2ff4de803d1:0x273a3ed64ffb047e!8m2!3d55.6402145!4d13.0886413?hl=sv/'>
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} className='LinkCardIcon'/>
          <span id="menu-text">Hitta hit</span>
        </a>
      </p>
      <p id="first" className='PerspectiveText'>
        <a href='https://instagram.com/eldtassens'>
          <FontAwesomeIcon icon={['fab', 'instagram']} className='LinkCardIcon'/>
          <span id="menu-text">Instagram</span>
        </a>
      </p>
    </div>
    <div className='PerspectiveLine'>
      <p className='PerspectiveText'>
        <a href='https://instagram.com/eldtassens'>
          <FontAwesomeIcon icon={['fab', 'instagram']} className='LinkCardIcon'/>
          <span id="menu-text">Instagram</span>
        </a>
      </p>
      <p id="first" className='PerspectiveText'>
        <a href='mailto:eldtassens@gmail.com'>
          <FontAwesomeIcon icon={['fas', 'envelope']} className='LinkCardIcon'/>
          <span id="menu-text">E-post</span>
        </a>
      </p>
    </div>
    <div className='PerspectiveLine'>
      <p className='PerspectiveText'>
        <a href='mailto:eldtassens@gmail.com'>
          <FontAwesomeIcon icon={['fas', 'envelope']} className='LinkCardIcon'/>
          <span id="menu-text">E-post</span>
        </a>
      </p>
    </div>
  </div>

export default LinkCard