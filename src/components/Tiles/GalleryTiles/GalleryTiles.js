import React from 'react';
import './GalleryTiles.css';

const GalleryTiles = (props) => {
    let classes = ['GalleryTiles'];
    if (props.className) {
        classes.push(props.className);
    }
    return (
        <div className={classes.join(' ')}>
            <div className="GalleryTiles__inner">
                {props.children}
            </div>
        </div>
    );
};

export default GalleryTiles;