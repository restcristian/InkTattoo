import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {
    return (
        <div className="Backdrop" onClick = {props.onClick} style={{opacity: (props.isOpen) ? 1 : 0,visibility: (props.isOpen) ? 'visible' : 'hidden'}}></div>
    );
};

export default Backdrop;