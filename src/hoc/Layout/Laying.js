import React from 'react';
import Aux from '../Auxiliary';
import NavItems from '../../components/NavItems/NavItems';
import Hero from '../../components/Hero/Hero';
import heroBG from '../../assets/imgs/hero_bg.png';
import { Element } from 'react-scroll';

const Layout = (props) => {
    return (
        <Aux>
            <Element name="s-home">
                <NavItems />
                <Hero bgImage={heroBG} />
                <div className="main-container">
                    {props.children}
                </div>
            </Element>
        </Aux>
    );
}

export default Layout;