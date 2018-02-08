import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {

    return (
        <Aux>
            <div
                className="Modal"
                onClick = {props.closeModal}
                style={{
                    transform: (props.isOpen) ? "translate3d(-50%,-50%,0)" : "translate3d(-50%,-100%,0)",
                    visibility: (props.isOpen) ? 'visible' : 'hidden',
                    opacity:(props.isOpen) ? 1 : 0
                }}>
                <div className="Modal__inner">
                    {props.children}
                    <button onClick = {props.closeModal} className = "Modal__closebtn appereance" type = "button"><span className = "accessible-hide">Close modal</span><span>X</span></button>
                </div>
            </div>
            <Backdrop isOpen={props.isOpen} onClick={props.closeModal} />
        </Aux>
    )
}

export default Modal;