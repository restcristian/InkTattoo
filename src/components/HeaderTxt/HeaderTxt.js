import React from 'react';
import Aux from '../../hoc/Aux';
import './HeaderTxt.css';
const HeaderTxt = (props) => {
    let classes = ['HeaderTxt'];
    if (props.className) {
        classes.push(props.className);
    }
    return (
        <Aux>
            <h2 className={classes.join(' ')}>{props.text}</h2>
        </Aux>
    );

};

export default HeaderTxt;