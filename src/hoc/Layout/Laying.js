import React from 'react';
import Aux from '../Auxiliary';
import NavItems from '../../components/NavItems/NavItems';
import Hero from '../../components/Hero/Hero';
import heroBG from '../../assets/imgs/hero_bg.png';

const Layout = (props) => {
    return (
        <Aux>
            <div id="s-home">
                <NavItems />
                <Hero bgImage={heroBG} />
                <div className="main-container">
                    {props.children}
                </div>
            </div>
        </Aux>
    );
}

export default Layout;