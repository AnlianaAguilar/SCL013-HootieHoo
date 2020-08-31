import React from 'react';
import './Button.css';
import ButtonLeft from '../../img/buttons/ButtonLeft.png'

const ButtonRight = ({title, onClick}) => {
    return (
        <button 
            className = 'backButton'
            onClick = {onClick}>
            {title}
            <img className="img_backButton" alt="backButton" src={ButtonLeft} />
        </button>
    )
}

export default ButtonRight; 