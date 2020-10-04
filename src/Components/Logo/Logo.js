import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Brain from './Brain.png'
const Logo = () => {
return(
    <div className='ml3 mt0'>
    <Tilt className='Tilt br2 shadow-2' option={{max : 25}} style = {{height :150, width :150}}>
    <div className='Tilt-inner'> <img alt = 'Logo' src = {Brain} style={{paddingTop : '40px'}}/> </div>
    </Tilt>
    </div>
)    
}  
export default Logo;