import React from 'react';
import './GalleryTile.css';

const GalleryTile = (props) => {
    let classes = ['GalleryTile'];
    if (props.className) {
        classes.push(props.className);
    }
    return (
        <div className={classes.join(' ')} onClick={props.onClick}>
            <div className="GalleryTile__media">
                <img src={props.bgImg} alt={props.caption} />
                <div className="GalleryTile__overlay">
                    <div>
                        <p className="reset-pad reset-mg GalleryTile__caption">{props.caption}</p>
                        <p className="reset-pad reset-mg GalleryTile__cta">View Photo</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryTile;