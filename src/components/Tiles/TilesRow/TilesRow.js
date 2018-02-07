import React from 'react';
import './TilesRow.css';
const TilesRow = (props) =>{
    let classes = ['TilesRow'];
    if(props.className){
        classes.push(props.className);
    }
    return(
        <div className = {classes.join(' ')}>
            {props.children}
        </div>
    );
};

export default TilesRow;