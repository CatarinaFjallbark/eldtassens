import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () =>
  <div className='Header'>
    <ul>
        <li>
        <Link to="/kullar">Kullar</Link>
        </li>
        <li>
         <Link to="/planer">Planer</Link>
        </li>
        <li>
         <Link to="/presentation">Presentation</Link>
        </li>
        <li>
         <Link to="/hundar">Hundar</Link>
        </li>
    </ul>
  </div>

export default Header;