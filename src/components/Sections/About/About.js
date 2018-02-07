import React from 'react';
import TilesRow from '../../Tiles/TilesRow/TilesRow';
import Tile from '../../Tiles/Tile/Tile';
import aboutBG from '../../../assets/imgs/about_bg.png';
import HeaderTxt from '../../HeaderTxt/HeaderTxt';
import tattoo from '../../../assets/imgs/tattoo_design.png';
import './About.css';

const About = (props) => {
    return (
        <section className="s-about">
            <TilesRow>
                <Tile
                    className="About col-item"
                    aspectRatio = "56.25%"
                    bgImage={aboutBG}
                >
                    <HeaderTxt text="About Us" />
                </Tile>
                <Tile
                    className="About col-item"
                    aspectRatio = "56.25%"
                    
                >
                    <div className="About__inner">
                        <img src={tattoo} alt="Tattoo" />
                        <p className="reset-pad reset-mg paragraph-1">
                            Aliquam ac justo interdum, elementum ligula et, condimentum orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                        <p className="reset-pad reset-mg paragraph-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc risus eros, ultricies quis erat sit amet, elementum vulputate lorem. Sed at lacinia lectus, quis blandit libero.
Quisque ac malesuada lectus. Proin gravida feugiat commodo. Phasellus fermentum sem ut felis vehicula aliquet. Donec rhoncus, mi et euismod dictum, purus lorem vehicula justo, a iaculis mi nulla et risus
                    </p>
                    </div>

                </Tile>
            </TilesRow>
        </section>

    );
};

export default About;