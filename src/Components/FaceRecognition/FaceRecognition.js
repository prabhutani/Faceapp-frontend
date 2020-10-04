import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ ImageUrl, Box }) => {
    return (
        <div className='centerflexx ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={ImageUrl} width='500px' height='auto' />
                <div className='boundingBox' style={{ top: Box.topRow, right: Box.rightCol, bottom: Box.bottomRow, left: Box.leftCol }}></div>
            </div>
        </div>
    )
};
export default FaceRecognition;