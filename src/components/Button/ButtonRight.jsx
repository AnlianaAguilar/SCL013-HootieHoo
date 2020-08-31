import React from 'react';
import './Button.css';
import buttonRight from '../../img/buttons/buttonRight.png'

const ButtonRightA = ({title, onClick}) => {
    return (
        <button 
            className = 'buttonRight'
            onClick = {onClick}>
            {title}
            <img className="img_backButton" alt="backButton" src={buttonRight} />
        </button>
    )
}

export default ButtonRightA; 