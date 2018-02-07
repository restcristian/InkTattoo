import React from 'react';
import Tile from '../Tile/Tile';
import './TeamTile.css';

const TeamTile = (props) => {
    let classes = ['TeamTile'],
        socialList = null;

    if (props.className) {
        classes.push(props.className);
    }
    if (props.memberInfo.socialLinks) {
        socialList = (
            <ul className="TeamTile__social-links reset-list">
                {props.memberInfo.socialLinks.map((item, idx) => {
                    let iconClasses = ['fa'];
                    switch (item.type) {
                        case 'facebook':
                            iconClasses.push('fa-facebook');
                            break;
                        case 'twitter':
                            iconClasses.push('fa-twitter');
                            break;
                        case 'instagram':
                            iconClasses.push('fa-instagram');
                            break;
                        default:
                            break;
                    }
                    return (
                        <li key={idx}><a href={item.url} target="_blank"><i className={iconClasses.join(' ')}></i><span className="accessible-hide">Facebook</span></a></li>
                    )
                })}

            </ul>
        );
    }
    return (
        <Tile
            className={classes.join(' ')}
            aspectRatio={props.aspectRatio}
            bgColor={props.bgColor}>

            <div className="TeamTile__inner">
                <div className="TeamTile__name">{props.memberInfo.name}</div>
                <p className="TeamTile__desc reset-pad reset-mg" >{props.memberInfo.desc}</p>
                {socialList}
            </div>

        </Tile>
    );
};

export default TeamTile;